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
Object.defineProperty(exports, "__esModule", { value: true });
const CompletedCourses_1 = require("../models/CompletedCourses");
const Class_1 = require("../models/Class");
const Course_1 = require("../models/Course");
const User_1 = require("../models/User");
const courseService = {
    addCourse: (course) => __awaiter(void 0, void 0, void 0, function* () { return Course_1.Course.create(course); }),
    getCourseById: (courseId) => __awaiter(void 0, void 0, void 0, function* () {
        return Course_1.Course.findOne({
            where: { id: courseId },
            include: [{
                    model: User_1.User,
                    as: 'tutor',
                    attributes: {
                        exclude: ['password', 'createdAt', 'updatedAt'],
                    },
                }, {
                    model: Class_1.Class,
                    as: 'class',
                    attributes: {
                        exclude: ['createdAt', 'updatedAt'],
                    },
                }],
        });
    }),
    update: (props, id) => Course_1.Course.update(Object.assign({}, props), { where: { id } }),
    getAll: () => Course_1.Course.findAll(),
    getByClassId: (id) => Course_1.Course.findAll({
        where: {
            classId: id,
        },
    }),
    complete: (data) => CompletedCourses_1.CompletedCourses.create(data),
    isCompleted: (data) => CompletedCourses_1.CompletedCourses.findOne({ where: Object.assign({}, data) }),
    completed: (id) => CompletedCourses_1.CompletedCourses.findAll({
        where: {
            userId: id,
        },
        include: [{
                model: Course_1.Course,
                as: 'course',
            }],
    }),
};
exports.default = courseService;
