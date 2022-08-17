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
exports.getStudents = exports.classExist = void 0;
const class_service_1 = __importDefault(require("../../services/class.service"));
const response_1 = __importDefault(require("../../helpers/response"));
const user_service_1 = __importDefault(require("../../services/user.service"));
const classExist = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const classId = req.params.classId || req.body.classId;
        const getClass = yield class_service_1.default.getclassById(parseInt(classId));
        if (!getClass) {
            return response_1.default.badRequest(res, 'Class not found');
        }
        return next();
    }
    catch (error) {
        return response_1.default.serverError(res, error.message);
    }
});
exports.classExist = classExist;
const getStudents = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const studentsToAadd = req.body.students;
        const students = [];
        for (const student of studentsToAadd) {
            const studentExists = yield user_service_1.default.getUserById(student);
            if (studentExists) {
                if (studentExists.get().role !== 'STUDENT') {
                    continue;
                }
                students.push(student);
            }
        }
        req.body = students.map((student) => ({
            classId: req.params.classId,
            userId: student,
        }));
        return next();
    }
    catch (error) {
        return response_1.default.serverError(res, error.message);
    }
});
exports.getStudents = getStudents;
exports.default = { classExist: exports.classExist };
