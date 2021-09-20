import { Router } from 'express';

import GameRepository from '../repositories/game.repository';
import QuakeLogParserService from '../services/quakeLogParser.service';

const GameRouter = Router();

const gameRepository = new GameRepository();

GameRouter.get('/', (_, response) => {
  const games = gameRepository.getGames();

  return response.json(games);
});

GameRouter.get('/:id', (request, response) => {
  const { id } = request.params;

  const game = gameRepository.getById(id);

  return response.json(game);
});

GameRouter.post('/', (_, response) => {
  const quakeLogParserService = new QuakeLogParserService(
    './src/data/games.log',
  );

  quakeLogParserService.execute();

  return response.status(201).json({
    status: 201,
    message: 'Success!',
  });
});

export default GameRouter;
