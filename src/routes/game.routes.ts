import { Router } from 'express';

import AppError from '../errors/app.errors';

const GameRouter = Router();

GameRouter.get('/', (_, response) => {
  return response.json({ response: 'Hello Horld!' });
});

GameRouter.get('/:id', (request, response) => {
  const { id } = request.params;

  return response.json({ response: `Hello Horld! ${id}` });
});

export default GameRouter;
