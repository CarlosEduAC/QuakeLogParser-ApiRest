import fs from 'fs';

import { IGameDTO } from '../entities/game.entity';
import AppError from '../errors/app.errors';

class GameRepository {
  private games: IGameDTO[] = [];

  private readFile(pathFile: string): void {
    const data = fs.readFileSync(pathFile, 'utf-8');

    this.games = JSON.parse(data);
  }

  public getGames(pathFile = './src/data/response.json'): IGameDTO[] {
    try {
      if (this.games.length === 0) this.readFile(pathFile);

      return this.games;
    } catch (err) {
      throw new AppError(err.message);
    }
  }

  public getById(id: string, pathFile = './src/data/response.json'): IGameDTO {
    try {
      if (this.games.length === 0) this.readFile(pathFile);

      const game = this.games[`game_${id}`];

      if (!game)
        throw new AppError(
          `Game does not exist! There are only ${
            Object.getOwnPropertyNames(this.games).length
          } games`,
        );

      return game;
    } catch (err) {
      throw new AppError(err.message);
    }
  }
}

export default GameRepository;
