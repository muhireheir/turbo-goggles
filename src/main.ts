import express, { Application } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import router from './routes/routes';
import db from './config/database.config';
import { User } from './models/User';
import BcryptUtil from './helpers/Bcrypt';

dotenv.config();
db.authenticate({
  logging: false,
}).then(async () => {
  await db.sync();
  const hasAdmin = await User.findOne({ where: { role: 'ADMIN' } });
  if (!hasAdmin) {
    await User.bulkCreate([
      {
        firstName: 'John',
        lastName: 'Doe',
        password: BcryptUtil.hashPassword('admin123'),
        role: 'ADMIN',
        email: 'admin@shecancode.com',
      },
    ]);
  }
});

const app :Application = express();
app.use(cors({ origin: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', router);
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`app runing on port ${port}`);
});
