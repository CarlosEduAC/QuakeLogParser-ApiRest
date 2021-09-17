import request from 'supertest';

import app from '../../src/app';

describe('Game', () => {
  it('should be able to list the games', done => {
    request(app).get('/games').expect(200, done);
  });

  it('should be able to find the game by the id', done => {
    request(app).get('/games/1').expect(200, done);
  });
});
