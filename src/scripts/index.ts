import es from 'event-stream';
import fs from 'fs';

import Game from '../model/Game';

const LINE_HAS_HYPHENS = /(-)\1+/;
const LINE_COMMAND = /^.{0,7}([a-z A-Z][^:]*)/;

class QuakeLogParser {
  private logPath: string;
  private games = [];

  constructor(logPath: string) {
    this.logPath = logPath;
  }

  public start(): void {
    let game = [];

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
                game = [];
              }

              if (stringIsClean) {
                game.push(manipulatedLine);
              }

              if (gameEnded) {
                this.addGame(game);
              }
            }

            stream.resume();
          })
          .on('end', () => {
            this.games.forEach(response => {
              console.log(response.getGame());
            });
          }),
      );
  }

  private addGame = (gameLog): void => {
    const game = new Game(gameLog);

    this.games.push(game);
  };
}

const quakeLogParser = new QuakeLogParser('./src/scripts/data/games.log');

quakeLogParser.start();

export default QuakeLogParser;
