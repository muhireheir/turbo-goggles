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
exports.roles = exports.isAuthenticated = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
const response_1 = __importDefault(require("../../helpers/response"));
const user_service_1 = __importDefault(require("../../services/user.service"));
dotenv_1.default.config();
const { serverError, badRequest } = response_1.default;
const isAuthenticated = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bearerToken = req.headers.authorization;
        const secretkey = process.env.JWT_KEY;
        if (bearerToken) {
            const token = bearerToken.split(' ')[1];
            const decoded = jsonwebtoken_1.default.verify(token, secretkey);
            const user = yield user_service_1.default.getUserByEmail(decoded.email);
            req.user = user === null || user === void 0 ? void 0 : user.get();
            return next();
        }
        return badRequest(res, 'Not logged in');
    }
    catch (err) {
        return serverError(res, err.message);
    }
});
exports.isAuthenticated = isAuthenticated;
// eslint-disable-next-line max-len
const roles = (allowedRoles) => (req, res, next) => {
    var _a;
    try {
        console.log('\n\n\n\n\n\n', allowedRoles, ' \n\n\n\n\n\n');
        if (!allowedRoles.includes((_a = req.user) === null || _a === void 0 ? void 0 : _a.role)) {
            return response_1.default.forbidden(res, 'Not allowed to access this');
        }
        return next();
    }
    catch (err) {
        return serverError(res, err.message);
    }
};
exports.roles = roles;
exports.default = { isAuthenticated: exports.isAuthenticated, roles: exports.roles };
