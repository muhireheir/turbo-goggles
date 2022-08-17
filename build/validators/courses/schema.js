"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const courseSchema = joi_1.default.object({
    name: joi_1.default.string().required(),
    classId: joi_1.default.number().required(),
    description: joi_1.default.string().required(),
    content: joi_1.default.string().required(),
    thumbnail: joi_1.default.string().required(),
    attachment: joi_1.default.string().required(),
});
exports.default = { courseSchema };
