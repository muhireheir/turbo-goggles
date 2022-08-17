"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
const sequelize_1 = require("sequelize");
const database_config_1 = __importDefault(require("../config/database.config"));
const User_1 = require("./User");
const Class_1 = require("./Class");
class Student extends sequelize_1.Model {
}
exports.Student = Student;
Student.init({
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
    userId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    sequelize: database_config_1.default,
    tableName: 'students',
});
Student.belongsTo(User_1.User, { foreignKey: 'userId', targetKey: 'id' });
Student.belongsTo(Class_1.Class, { foreignKey: 'classId', targetKey: 'id' });
