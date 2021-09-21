import Game from '../../src/entities/game.entity';
import { GAME_LOG_MOCK, GAME_MOCK } from './game.entity.mock';

describe('Game Entity', () => {
  it('should be able to create a game', () => {
    jest.setTimeout(60000);

    const game = new Game(GAME_LOG_MOCK);

    expect(game.getGame()).toEqual(GAME_MOCK);
  });
});
