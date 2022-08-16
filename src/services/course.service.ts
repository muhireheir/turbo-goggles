import { CompletedCourses, CompletedCoursesFields } from '../models/CompletedCourses';
import { Class } from '../models/Class';
import { CourseFields, Course } from '../models/Course';
import { User } from '../models/User';

const courseService = {
  addCourse: async (course:CourseFields) => Course.create(course),
  getCourseById: async (courseId:number) => Course.findOne({
    where: { id: courseId },
    include: [{
      model: User,
      as: 'tutor',
      attributes: {
        exclude: ['password', 'createdAt', 'updatedAt'],
      },
    }, {
      model: Class,
      as: 'class',
      attributes: {
        exclude: ['createdAt', 'updatedAt'],
      },
    }],
  }),
  update: (props:CourseFields, id:number) => Course.update({ ...props }, { where: { id } }),
  getAll: () => Course.findAll(),
  getByClassId: (id:number) => Course.findAll({
    where: {
      classId: id,
    },
  }),
  complete: (data:CompletedCoursesFields) => CompletedCourses.create(data),
  isCompleted: (data:CompletedCoursesFields) => CompletedCourses.findOne({ where: { ...data } }),
  completed: (id:number) => CompletedCourses.findAll({
    where: {
      userId: id,
    },
    include: [{
      model: Course,
      as: 'course',
    }],
  }),
};

export default courseService;
