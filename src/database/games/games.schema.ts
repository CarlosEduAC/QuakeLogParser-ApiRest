import Mongoose from 'mongoose';

const GamesSchema = new Mongoose.Schema({
  totalKills: Number,
  players: [String],
  kills: [
    {
      type: Map,
      of: String,
    },
  ],
  lastUpdated: {
    type: Date,
    default: new Date(),
  },
});

export default GamesSchema;
