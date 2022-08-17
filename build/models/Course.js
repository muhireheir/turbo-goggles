"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Course = void 0;
const sequelize_1 = require("sequelize");
const database_config_1 = __importDefault(require("../config/database.config"));
const User_1 = require("./User");
const Class_1 = require("./Class");
class Course extends sequelize_1.Model {
}
exports.Course = Course;
Course.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    classId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    tutorId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    content: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    thumbnail: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    attachment: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    isEnabled: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: false,
    },
}, {
    sequelize: database_config_1.default,
    tableName: 'courses',
});
Course.belongsTo(User_1.User, { targetKey: 'id', foreignKey: 'tutorId', as: 'tutor' });
Course.belongsTo(Class_1.Class, { targetKey: 'id', foreignKey: 'classId', as: 'class' });
