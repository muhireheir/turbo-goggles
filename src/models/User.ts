import { Model, DataTypes } from 'sequelize';
import db from '../config/database.config';

export interface userFields {
    id?: number;
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
    role?: string;
}

export class User extends Model<userFields> { }

User.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  role: {
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: 'STUDENT',
  },
}, {
  sequelize: db,
});
