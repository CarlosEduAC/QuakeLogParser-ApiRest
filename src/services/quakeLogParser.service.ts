import es from 'event-stream';
import fs from 'fs';

import GamesModel from '../database/games/games.model';
import Game from '../entities/game.entity';
import AppError from '../errors/app.errors';

const LINE_HAS_HYPHENS = /(-)\1+/;
const LINE_COMMAND = /^.{0,7}([a-z A-Z][^:]*)/;

class QuakeLogParserService {
  private logPath: string;
  private games = [];

  constructor(logPath: string) {
    this.logPath = logPath;
  }

  public execute(): void {
    let gameLog = [];

    const stream = fs
      .createReadStream(this.logPath)
      .pipe(es.split())
      .pipe(
        es
          .mapSync(async (logLine: string) => {
            stream.pause();

            const manipulatedLine = logLine.match(LINE_COMMAND);

            if (manipulatedLine) {
              const currentCommand = manipulatedLine[1];

              const gameStarted = currentCommand === 'InitGame';

              const stringIsClean = logLine.search(LINE_HAS_HYPHENS) === -1;

              const gameEnded = currentCommand === 'ShutdownGame';

              if (gameStarted) {
                gameLog = [];
              }

              if (stringIsClean) {
                gameLog.push(manipulatedLine);
              }

              if (gameEnded) {
                const game = new Game(gameLog);

                this.games.push(game);
              }
            }

            stream.resume();
          })
          .on('error', () => {
            throw new AppError('Error while reading file!');
          })
          .on('end', () => {
            const response = {};

            this.games.forEach(async (game, index) => {
              response[`game_${index}`] = game.getGame();
              // await GamesModel.create(game);
            });

            fs.writeFile(
              './src/data/response.json',
              JSON.stringify(response),
              err => {
                if (err) throw err;

                console.log('salvo!');
              },
            );
          }),
      );
  }
}

export default QuakeLogParserService;
