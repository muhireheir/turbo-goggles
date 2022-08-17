"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Class_1 = require("../models/Class");
const Students_1 = require("../models/Students");
const classService = {
    create: (classInfo) => Class_1.Class.create(classInfo),
    getAll: () => Class_1.Class.findAll(),
    addStudents: (student) => Students_1.Student.bulkCreate(student),
    getclassById: (id) => Class_1.Class.findByPk(id),
    update: (props, id) => Class_1.Class.update(Object.assign({}, props), { where: { id } }),
};
exports.default = classService;
