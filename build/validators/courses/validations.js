"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const response_1 = __importDefault(require("../../helpers/response"));
const schema_1 = __importDefault(require("./schema"));
const { courseSchema } = schema_1.default;
const { badRequest, serverError } = response_1.default;
const newCourse = (req, res, next) => {
    try {
        const { error } = courseSchema.validate(req.body);
        if (error) {
            return badRequest(res, error);
        }
        return next();
    }
    catch (error) {
        return serverError(res, error.message);
    }
};
exports.default = { newCourse };
