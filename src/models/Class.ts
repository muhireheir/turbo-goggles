import { Model, DataTypes } from 'sequelize';
import db from '../config/database.config';
import { User } from './User';

export interface classFields {
    id?: number;
    name?: string;
    tutorId?:number;
}

export class Class extends Model<classFields> { }

Class.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tutorId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
}, {
  sequelize: db,
  tableName: 'classes',
});

Class.belongsTo(User, {
  targetKey: 'id',
  foreignKey: 'tutorId',
  foreignKeyConstraint: true,
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});
