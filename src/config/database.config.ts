import { Sequelize } from 'sequelize';

const db = new Sequelize('cancode', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
});

export default db;
