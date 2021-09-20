import es from 'event-stream';
import fs from 'fs';

import AppError from '../errors/app.errors';
import Game, { IGameDTO } from '../model/Game';

const LINE_HAS_HYPHENS = /(-)\1+/;
const LINE_COMMAND = /^.{0,7}([a-z A-Z][^:]*)/;

class QuakeLogParserService {
  private logPath: string;
  private formattedGames: IGameDTO[];
  private games = [];

  constructor(logPath: string) {
    this.logPath = logPath;
  }

  public execute(): IGameDTO[] {
    let gameLog = [];

    const stream = fs
      .createReadStream(this.logPath)
      .pipe(es.split())
      .pipe(
        es
          .mapSync((logLine: string) => {
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
          .on('error', err => {
            console.log(err);
            throw new AppError('Error while reading file!');
          })
          .on('end', () => {
            this.formattedGames = this.games.map<IGameDTO>(game => {
              return game.getGame();
            });

            console.log(this.formattedGames);
          }),
      );

    return this.formattedGames;
  }
}

export default QuakeLogParserService;
