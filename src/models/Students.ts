import { Model, DataTypes } from 'sequelize';
import db from '../config/database.config';
import { User } from './User';
import { Class } from './Class';

export interface StudentsField {
    id?: number;
    userId?:number;
    classId?: number;
}

export class Student extends Model<StudentsField> { }

Student.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  classId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  sequelize: db,
  tableName: 'students',
});

Student.belongsTo(User, { foreignKey: 'userId', targetKey: 'id' });
Student.belongsTo(Class, { foreignKey: 'classId', targetKey: 'id' });
