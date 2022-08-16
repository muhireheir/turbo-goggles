import { classFields, Class } from '../models/Class';
import { Student, StudentsField } from '../models/Students';

const classService = {
  create: (classInfo:classFields) => Class.create(classInfo),
  getAll: () => Class.findAll(),
  addStudents: (student:StudentsField[]) => Student.bulkCreate(student),
  getclassById: (id:number) => Class.findByPk(id),
  update: (props:classFields, id:number) => Class.update({ ...props }, { where: { id } }),
};

export default classService;
