"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = require("../../middlewares/auth/index");
const UserController_1 = __importDefault(require("../../controllers/UserController"));
const userExists_1 = require("../../middlewares/user/userExists");
const user_1 = __importDefault(require("../../validators/user"));
const router = express_1.default.Router();
const { register, login, getAllUsers, addUser, } = UserController_1.default;
router.post('/register', userExists_1.userExists, user_1.default.validateSignupBody, register);
router.post('/login', user_1.default.validateLoginBody, login);
router.post('/', userExists_1.userExists, user_1.default.addUserBody, addUser);
router.get('/', index_1.isAuthenticated, getAllUsers);
exports.default = router;
