import { Model, DataTypes } from 'sequelize';
import db from '../config/database.config';
import { User } from './User';
import { Course } from './Course';

export interface CompletedCoursesFields {
    id?: number;
    userId?:number;
    courseId?: number;
}

export class CompletedCourses extends Model<CompletedCoursesFields> { }

CompletedCourses.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  courseId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  sequelize: db,
  tableName: 'completedCourses',
});
CompletedCourses.belongsTo(User, { foreignKey: 'userId', targetKey: 'id' });
CompletedCourses.belongsTo(Course, { foreignKey: 'courseId', targetKey: 'id', as: 'course' });
