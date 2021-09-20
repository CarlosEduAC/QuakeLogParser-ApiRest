import { Router } from 'express';

import GamesModel from '../database/games/games.model';
import QuakeLogParserService from '../services/quakeLogParser.service';

const GameRouter = Router();

GameRouter.get('/', async (_, response) => {
  const games = await GamesModel.find();

  return response.json(games);
});

GameRouter.get('/:id', async (request, response) => {
  const { id } = request.params;

  const game = await GamesModel.findById(id);

  return response.json(game);
});

GameRouter.post('/', (_, response) => {
  const quakeLogParserService = new QuakeLogParserService(
    './src/data/games.log',
  );

  quakeLogParserService.execute();

  return response.status(201).send();
});

export default GameRouter;
