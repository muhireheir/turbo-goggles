"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const createToken = (data) => {
    const secretkey = process.env.JWT_KEY;
    return jsonwebtoken_1.default.sign(data, secretkey, {
        expiresIn: '1h',
    });
};
exports.default = createToken;
