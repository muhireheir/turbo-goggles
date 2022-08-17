"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Class = void 0;
const sequelize_1 = require("sequelize");
const database_config_1 = __importDefault(require("../config/database.config"));
const User_1 = require("./User");
class Class extends sequelize_1.Model {
}
exports.Class = Class;
Class.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    tutorId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
}, {
    sequelize: database_config_1.default,
    tableName: 'classes',
});
Class.belongsTo(User_1.User, {
    targetKey: 'id',
    foreignKey: 'tutorId',
    foreignKeyConstraint: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
});
