import { Router } from 'express';

const GameRouter = Router();

GameRouter.get('/', async (_, response) => {
  return response.json({ response: 'Hello Horld!' });
});

GameRouter.get('/:id', async (request, response) => {
  const { id } = request.params;

  return response.json({ response: `Hello Horld! ${id}` });
});

export default GameRouter;
