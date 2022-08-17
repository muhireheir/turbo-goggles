"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
class BcryptUtil {
    static hashPassword(password) {
        return bcrypt_1.default.hashSync(password, 10);
    }
    static comparePassword(plainPassword, hashPassword) {
        return bcrypt_1.default.compareSync(plainPassword, hashPassword);
    }
}
exports.default = BcryptUtil;
