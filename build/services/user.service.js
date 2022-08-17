"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../models/User");
const userService = {
    getUserByEmail: (email) => User_1.User.findOne({ where: { email } }),
    getAllUsers: () => User_1.User.findAll({
        attributes: {
            exclude: ['password', 'createdAt', 'updatedAt'],
        },
    }),
    getUserById: (id) => User_1.User.findByPk(id),
    getUsersByrole: (role) => User_1.User.findAll({ where: { role } }),
};
exports.default = userService;
