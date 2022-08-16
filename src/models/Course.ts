import { Model, DataTypes } from 'sequelize';
import db from '../config/database.config';
import { User } from './User';
import { Class } from './Class';

export interface CourseFields {
    id?: number;
    name?:string;
    classId?: number;
    tutorId?:number;
    description?:string;
    content?:string,
    thumbnail?:string,
    attachment?:string,
    isEnabled?:boolean

}

export class Course extends Model<CourseFields> { }

Course.init({
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
  tutorId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  thumbnail: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  attachment: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  isEnabled: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
}, {
  sequelize: db,
  tableName: 'courses',
});

Course.belongsTo(User, { targetKey: 'id', foreignKey: 'tutorId', as: 'tutor' });
Course.belongsTo(Class, { targetKey: 'id', foreignKey: 'classId', as: 'class' });
