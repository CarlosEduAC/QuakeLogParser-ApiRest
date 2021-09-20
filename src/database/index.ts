import Mongoose from 'mongoose';

let database: Mongoose.Connection;

const { MONGO_URL } = process.env;

export const connect = (): void => {
  if (database) {
    return;
  }

  // Mongoose.connect(MONGO_URL);
  Mongoose.connect(
    'mongodb+srv://root:quakelog@cluster.pa9ao.mongodb.net/quakelogdb?retryWrites=true&w=majority',
  );

  database = Mongoose.connection;

  database.once('open', async () => {
    console.log('Connected to database');
  });

  database.on('error', () => {
    console.log('Error connecting to database');
  });
};

export const disconnect = (): void => {
  if (!database) {
    return;
  }

  Mongoose.disconnect();
};
