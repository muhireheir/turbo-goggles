"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = require("../../middlewares/auth/index");
const userExists_1 = require("../../middlewares/user/userExists");
const index_2 = require("../../middlewares/class/index");
const ClassController_1 = __importDefault(require("../../controllers/ClassController"));
const class_validations_1 = __importDefault(require("../../validators/class/class.validations"));
const router = express_1.default.Router();
const { create, getAll, addStudents, assignTutor, getCourses, } = ClassController_1.default;
router.post('/', class_validations_1.default.newclassBody, create);
router.get('/', getAll);
router.post('/:classId', index_2.classExist, index_2.getStudents, addStudents);
router.put('/:classId/tutor/:tutorId', index_2.classExist, userExists_1.tutorExist, assignTutor);
router.get('/:classId/courses', index_1.isAuthenticated, getCourses);
exports.default = router;
