import express, { Application } from 'express';
import dotenv from 'dotenv';
import router from './routes/routes';
import db from './config/database.config';

dotenv.config();
db.authenticate().then(async () => {
  await db.sync();
});

const app :Application = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', router);
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`app runing on port ${port}`);
});
