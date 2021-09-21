import es from 'event-stream';
import fs from 'fs';

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

    try {
      const stream = fs
        .createReadStream(this.logPath)
        .pipe(es.split())
        .pipe(
          es
            .mapSync(async (logLine: string) => {
              stream.pause();

              const manipulatedLine = logLine.match(LINE_COMMAND);
              const stringIsClean = logLine.search(LINE_HAS_HYPHENS) === -1;

              if (manipulatedLine && stringIsClean) {
                const currentCommand = manipulatedLine[1];

                const gameStarted = currentCommand === 'InitGame';

                const gameEnded = currentCommand === 'ShutdownGame';

                if (gameStarted) {
                  gameLog = [];
                }

                gameLog.push(manipulatedLine);

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
                response[`game_${index + 1}`] = game.getGame();
              });

              fs.writeFile(
                './src/data/response.json',
                JSON.stringify(response),
                err => {
                  if (err) throw new AppError(err.message);
                },
              );
            }),
        );
    } catch (err) {
      throw new AppError(err.message);
    }
  }
}

export default QuakeLogParserService;
