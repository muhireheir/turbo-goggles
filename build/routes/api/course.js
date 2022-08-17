"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = require("../../middlewares/auth");
const CourseController_1 = __importDefault(require("../../controllers/CourseController"));
const validations_1 = __importDefault(require("../../validators/courses/validations"));
const index_1 = require("../../middlewares/class/index");
const course_1 = require("../../middlewares/course");
const router = express_1.default.Router();
router.post('/', auth_1.isAuthenticated, (0, auth_1.roles)(['ADMIN', 'TUTOR']), index_1.classExist, validations_1.default.newCourse, CourseController_1.default.create);
router.get('/', auth_1.isAuthenticated, CourseController_1.default.getAllCourses);
router.get('/:courseId', auth_1.isAuthenticated, CourseController_1.default.viewCourse);
router.put('/:courseId/status', (0, auth_1.roles)(['ADMIN']), auth_1.isAuthenticated, course_1.courseExists, CourseController_1.default.changeStatus);
router.post('/:courseId/complete', auth_1.isAuthenticated, (0, auth_1.roles)(['STUDENT']), CourseController_1.default.markComplete);
router.get('/completed/mine', auth_1.isAuthenticated, (0, auth_1.roles)(['STUDENT']), CourseController_1.default.completed);
exports.default = router;
