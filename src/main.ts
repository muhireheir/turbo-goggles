import express from 'express';
import dotenv from 'dotenv';
import connectToDb from './database/config';
import router from './routes/routes';

dotenv.config();

connectToDb();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', router);
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`app runing on port ${port}`);
});
