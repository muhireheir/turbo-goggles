"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompletedCourses = void 0;
const sequelize_1 = require("sequelize");
const database_config_1 = __importDefault(require("../config/database.config"));
const User_1 = require("./User");
const Course_1 = require("./Course");
class CompletedCourses extends sequelize_1.Model {
}
exports.CompletedCourses = CompletedCourses;
CompletedCourses.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    courseId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    userId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    sequelize: database_config_1.default,
    tableName: 'completedCourses',
});
CompletedCourses.belongsTo(User_1.User, { foreignKey: 'userId', targetKey: 'id' });
CompletedCourses.belongsTo(Course_1.Course, { foreignKey: 'courseId', targetKey: 'id', as: 'course' });
