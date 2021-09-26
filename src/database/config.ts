import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const connectToDb = () => {
  const mongoDB:any = process.env.MONGODB_URI;
  mongoose.connect(mongoDB);
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error: '));
  db.once('open', () => {
    console.log('Connected successfully');
  });
};

export default connectToDb;
