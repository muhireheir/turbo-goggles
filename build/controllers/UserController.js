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
// import { v4 } from 'uuid';
const User_1 = require("../models/User");
const Bcrypt_1 = __importDefault(require("../helpers/Bcrypt"));
const response_1 = __importDefault(require("../helpers/response"));
const createToken_1 = __importDefault(require("../helpers/createToken"));
const user_service_1 = __importDefault(require("../services/user.service"));
const UserController = {
    register: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const password = Bcrypt_1.default.hashPassword(req.body.password);
            const user = yield User_1.User.create(Object.assign(Object.assign({}, req.body), { password }));
            const token = (0, createToken_1.default)({ email: user.get().email, role: user.get().role });
            return response_1.default.success(res, 'Account created', { token, role: user.get().role, email: user.get().email });
        }
        catch (error) {
            return response_1.default.serverError(res, error.message);
        }
    }),
    login: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const user = yield user_service_1.default.getUserByEmail(req.body.email);
            if (!user) {
                return response_1.default.badRequest(res, 'Incorrect username or password');
            }
            const { password } = user.get();
            const passwordMatches = Bcrypt_1.default.comparePassword(req.body.password, password);
            if (!passwordMatches) {
                return response_1.default.badRequest(res, 'Incorrect username or password');
            }
            const token = (0, createToken_1.default)({ email: user.get().email, role: user.get().role });
            return response_1.default.success(res, 'Logged in successfully', { token, role: user.get().role, email: user.get().email });
        }
        catch (error) {
            return response_1.default.serverError(res, error.message);
        }
    }),
    addUser: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const generatedPassword = 'default123';
        const password = Bcrypt_1.default.hashPassword(generatedPassword);
        const user = yield User_1.User.create(Object.assign(Object.assign({}, req.body), { password, role: 'TUTOR' }));
        return response_1.default.success(res, 'Account created', { role: user.get().role, email: user.get().email });
    }),
    getAllUsers: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const allUsers = yield user_service_1.default.getAllUsers();
            return response_1.default.success(res, 'Success', allUsers);
        }
        catch (error) {
            return response_1.default.serverError(res, error.message);
        }
    }),
};
exports.default = UserController;
