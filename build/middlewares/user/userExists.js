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
exports.tutorExist = exports.userExists = void 0;
const response_1 = __importDefault(require("../../helpers/response"));
const user_service_1 = __importDefault(require("../../services/user.service"));
const { serverError, conflict, badRequest } = response_1.default;
const userExists = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_service_1.default.getUserByEmail(req.body.email);
        if (user) {
            return conflict(res, 'Email already exists');
        }
        return next();
    }
    catch (error) {
        return serverError(res, error.message);
    }
});
exports.userExists = userExists;
const tutorExist = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tutorId = req.params.tutorId || req.body.tutorId;
        const user = yield user_service_1.default.getUserById(parseInt(tutorId));
        if (!user) {
            return badRequest(res, 'Tutor not found');
        }
        const { role } = user.get();
        if (role !== 'TUTOR') {
            return badRequest(res, 'Tutor not found');
        }
        return next();
    }
    catch (error) {
        return serverError(res, error.message);
    }
});
exports.tutorExist = tutorExist;
exports.default = { userExists: exports.userExists };
