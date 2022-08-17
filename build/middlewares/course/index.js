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
exports.courseExists = void 0;
const response_1 = __importDefault(require("../../helpers/response"));
const course_service_1 = __importDefault(require("../../services/course.service"));
const courseExists = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const courseId = req.params.courseId || req.body.courseId;
        const getCourse = yield course_service_1.default.getCourseById(courseId);
        if (!getCourse) {
            return response_1.default.badRequest(res, 'Course not found');
        }
        req.body.courseStatus = getCourse.get().isEnabled;
        return next();
    }
    catch (error) {
        return response_1.default.serverError(res, error.message);
    }
});
exports.courseExists = courseExists;
exports.default = { courseExists: exports.courseExists };
