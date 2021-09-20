import { v4 as uuidv4 } from 'uuid';

export interface IGameDTO {
  totalKills: number;
  players: string[];
  kills: object; //eslint-disable-line
}

const PLAYER_NAME = /ClientUserinfoChanged: [0-9]* n\\(.*)\\t\\[0-9]+\\model/;
const FIGHTERS_NAME = /Kill: [0-9 ]*: (.*) killed (.*) by/;

class Game {
  private totalKills: number;
  private players: string[];
  private kills: Map<string, number>;

  constructor(gameLog = []) {
    this.totalKills = 0;
    this.players = [];
    this.kills = new Map<string, number>();

    this.create(gameLog);
  }

  private create(gameLog): void {
    gameLog.forEach(manipulatedLine => {
      const currentCommand = manipulatedLine[1];
      const currentLine = manipulatedLine.input;

      this.handleCommand(currentCommand, currentLine);

      return currentCommand;
    });
  }

  private handleCommand(command: string, currentLine: string): void {
    switch (command) {
      case 'ClientUserinfoChanged':
        this.addPlayer(currentLine);
        break;
      case 'Kill':
        this.handleKill(currentLine);
        break;
      default:
        break;
    }
  }

  private addPlayer(line: string): void {
    const playerName = line.match(PLAYER_NAME)[1];

    const havePlayer = this.players.find(player => player === playerName);

    if (!havePlayer) {
      this.players.push(playerName);
      this.kills.set(playerName, 0);
    }
  }

  private handleKill(line: string): void {
    const fighters = line.match(FIGHTERS_NAME);

    if (fighters) {
      this.totalKills += 1;

      if (fighters[1] === '<world>') {
        const playerKills = this.kills.get(fighters[2]);

        this.kills.set(fighters[2], playerKills - 1);
      } else if (fighters[1] !== fighters[2]) {
        const playerKills = this.kills.get(fighters[1]);

        this.kills.set(fighters[1], playerKills + 1);
      }
    }
  }

  public getGame(): IGameDTO {
    const obj = {};

    this.kills.forEach((value, key): void => {
      obj[key] = value;
    });

    return {
      totalKills: this.totalKills,
      players: this.players,
      kills: obj,
    };
  }
}

export default Game;
