import dotenv from 'dotenv';
import db from '../config/database.config';
import userSeeders from './Users';

dotenv.config();
db.authenticate({
  logging: false,
}).then(async () => {
//   await db.sync({ force: true });
  userSeeders();
});
