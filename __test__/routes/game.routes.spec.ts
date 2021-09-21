import request from 'supertest';

import app from '../../src/app';
import {
  RESPONSE_GET_MOCK,
  RESPONSE_POST_MOCK,
  ERROR_GET_BY_ID_MOCK,
  RESPONSE_GET_BY_ID_MOCK,
} from './game.routes.mock';

describe('Game Routes', () => {
  it('should be able to list the games', done => {
    request(app).get('/games').expect(200, RESPONSE_GET_MOCK, done);
  });

  it('should be able to find the game by the id', done => {
    request(app).get('/games/1').expect(200, RESPONSE_GET_BY_ID_MOCK, done);
  });

  it('should not be able to find the game by the id', done => {
    request(app).get('/games/30').expect(400, ERROR_GET_BY_ID_MOCK, done);
  });

  it('should be able to parse without error', done => {
    request(app).post('/games').expect(201, RESPONSE_POST_MOCK, done);
  });
});
