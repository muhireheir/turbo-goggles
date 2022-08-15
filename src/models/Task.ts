import { Model, DataTypes } from 'sequelize';
import db from '../config/database.config';

interface Task {
    id: string;
    name: string;
}

export class TaskInstance extends Model<Task> { }

TaskInstance.init({
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
  },
}, {
  sequelize: db,
});
