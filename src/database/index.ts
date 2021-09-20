import Mongoose from 'mongoose';

let database: Mongoose.Connection;

export const connect = (): void => {
  const uri =
    'mongodb+srv://root:quakelog@cluster.pa9ao.mongodb.net/quakelogdb?retryWrites=true&w=majority';

  if (database) {
    return;
  }

  Mongoose.connect(uri);

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
