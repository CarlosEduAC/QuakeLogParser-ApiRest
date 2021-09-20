import { Router } from 'express';

import QuakeLogParserService from '../services/quakeLogParser.service';

const GameRouter = Router();

GameRouter.get('/', (_, response) => {
  return response.json({ response: 'Hello Horld!' });
});

GameRouter.get('/:id', (request, response) => {
  const { id } = request.params;

  return response.json({ response: `Hello Horld! ${id}` });
});

GameRouter.post('/', (_, response) => {
  const quakeLogParserService = new QuakeLogParserService(
    './src/data/games.log',
  );

  quakeLogParserService.execute();

  return response.status(201).send();
});

export default GameRouter;
