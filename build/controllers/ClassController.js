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
const class_service_1 = __importDefault(require("../services/class.service"));
const response_1 = __importDefault(require("../helpers/response"));
const course_service_1 = __importDefault(require("../services/course.service"));
const classController = {
    create: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield class_service_1.default.create(req.body);
            return response_1.default.success(res, 'Classes added!', {});
        }
        catch (error) {
            return response_1.default.serverError(res, error.message);
        }
    }),
    getAll: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const allClasses = yield class_service_1.default.getAll();
            return response_1.default.success(res, 'success', allClasses);
        }
        catch (error) {
            return response_1.default.serverError(res, error.message);
        }
    }),
    addStudents: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield class_service_1.default.addStudents(req.body);
            return response_1.default.success(res, 'Students added successfully', {});
        }
        catch (error) {
            return response_1.default.serverError(res, error.message);
        }
    }),
    assignTutor: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield class_service_1.default.update({ tutorId: parseInt(req.params.tutorId) }, parseInt(req.params.classId));
            return response_1.default.success(res, 'Tutor assigned to a class', {});
        }
        catch (error) {
            return response_1.default.serverError(res, error.message);
        }
    }),
    getCourses: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const courses = yield course_service_1.default.getByClassId(req.params.classId);
            return response_1.default.success(res, 'class courses', courses);
        }
        catch (error) {
            return response_1.default.serverError(res, error.message);
        }
    }),
};
exports.default = classController;
