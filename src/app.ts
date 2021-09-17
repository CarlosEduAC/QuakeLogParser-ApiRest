import cors from 'cors';
import express from 'express';
import swaggerUi from 'swagger-ui-express';

import ErrorHandler from './errors/handler.errors';
import routes from './routes';
import * as swaggerDocument from './swagger.json';

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(ErrorHandler);

export default app;
