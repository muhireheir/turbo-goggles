"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const response_1 = __importDefault(require("../helpers/response"));
const UserSchema_1 = __importDefault(require("./UserSchema"));
const { newUserSchema, existinguserSchema, addUserSchema } = UserSchema_1.default;
const { badRequest, serverError } = response_1.default;
const validateSignupBody = (req, res, next) => {
    try {
        const { error } = newUserSchema.validate(req.body);
        if (error) {
            return badRequest(res, error);
        }
        return next();
    }
    catch (error) {
        return serverError(res, error.message);
    }
};
const addUserBody = (req, res, next) => {
    try {
        const { error } = addUserSchema.validate(req.body);
        if (error) {
            return badRequest(res, error);
        }
        return next();
    }
    catch (error) {
        return serverError(res, error.message);
    }
};
const validateLoginBody = (req, res, next) => {
    try {
        const { error } = existinguserSchema.validate(req.body);
        if (error) {
            return badRequest(res, error);
        }
        return next();
    }
    catch (error) {
        return serverError(res, error.message);
    }
};
exports.default = { validateSignupBody, validateLoginBody, addUserBody };
