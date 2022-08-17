"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const response_1 = __importDefault(require("../../helpers/response"));
const schema_1 = __importDefault(require("./schema"));
const { newClassSchema } = schema_1.default;
const { badRequest, serverError } = response_1.default;
const newclassBody = (req, res, next) => {
    try {
        const { error } = newClassSchema.validate(req.body);
        if (error) {
            return badRequest(res, error);
        }
        return next();
    }
    catch (error) {
        return serverError(res, error.message);
    }
};
exports.default = { newclassBody };
