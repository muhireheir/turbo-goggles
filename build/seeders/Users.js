"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Bcrypt_1 = __importDefault(require("../helpers/Bcrypt"));
const User_1 = require("../models/User");
const userSeeder = () => __awaiter(void 0, void 0, void 0, function* () {
    yield User_1.User.bulkCreate([
        {
            firstName: 'John',
            lastName: 'Doe',
            password: Bcrypt_1.default.hashPassword('admin'),
            role: 'ADMIN',
            email: 'admin@shecancode.com',
        },
    ]);
});
exports.default = userSeeder;
