import Mongoose from 'mongoose';

import GamesSchema from './games.schema';

const GamesModel = Mongoose.model('games', GamesSchema);

export default GamesModel;
