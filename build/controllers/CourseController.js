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
const response_1 = __importDefault(require("../helpers/response"));
const course_service_1 = __importDefault(require("../services/course.service"));
const courseController = {
    create: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        try {
            req.body = Object.assign(Object.assign({}, req.body), { tutorId: (_a = req.user) === null || _a === void 0 ? void 0 : _a.id });
            yield course_service_1.default.addCourse(req.body);
            return response_1.default.success(res, 'Course added!', {});
        }
        catch (error) {
            return response_1.default.serverError(res, error.message);
        }
    }),
    changeStatus: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield course_service_1.default.update({ isEnabled: !req.body.courseStatus }, parseInt(req.params.courseId));
            return response_1.default.success(res, 'Course status changed!', {});
        }
        catch (error) {
            return response_1.default.serverError(res, error.message);
        }
    }),
    getAllCourses: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const courses = yield course_service_1.default.getAll();
            return response_1.default.success(res, 'coures fetched', courses);
        }
        catch (error) {
            return response_1.default.serverError(res, error.message);
        }
    }),
    viewCourse: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const course = yield course_service_1.default.getCourseById(parseInt(req.params.courseId));
            return response_1.default.success(res, 'coure fetched', course);
        }
        catch (error) {
            return response_1.default.serverError(res, error.message);
        }
    }),
    markComplete: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        var _b;
        try {
            const id = (_b = req.user) === null || _b === void 0 ? void 0 : _b.id;
            const courseId = req.params.courseId;
            const isCompleted = yield course_service_1.default.isCompleted({ courseId, userId: id });
            if (!isCompleted) {
                const course = yield course_service_1.default.complete({ courseId, userId: id });
                return response_1.default.success(res, 'course completed', course);
            }
            return response_1.default.success(res, 'course alredy completed', isCompleted);
        }
        catch (error) {
            return response_1.default.serverError(res, error.message);
        }
    }),
    completed: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        var _c;
        try {
            const id = (_c = req.user) === null || _c === void 0 ? void 0 : _c.id;
            const courses = yield course_service_1.default.completed(id);
            return response_1.default.success(res, 'courses completed', courses);
        }
        catch (error) {
            return response_1.default.serverError(res, error.message);
        }
    }),
};
exports.default = courseController;
