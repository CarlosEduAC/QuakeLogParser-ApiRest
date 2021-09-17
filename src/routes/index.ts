import { Router } from 'express';

import GameRouter from './game.routes';

const routes = Router();

routes.use('/games', GameRouter);

export default routes;
