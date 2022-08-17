import express, { Router } from 'express';
import { isAuthenticated, roles } from '../../middlewares/auth';
import courseController from '../../controllers/CourseController';
import validations from '../../validators/courses/validations';
import { classExist } from '../../middlewares/class/index';
import { courseExists } from '../../middlewares/course';

const router: Router = express.Router();
router.post('/', isAuthenticated, roles(['ADMIN', 'TUTOR']), classExist, validations.newCourse, courseController.create);
router.get('/', isAuthenticated, courseController.getAllCourses);
router.get('/:courseId', isAuthenticated, courseController.viewCourse);
router.put('/:courseId/status', roles(['ADMIN']), isAuthenticated, courseExists, courseController.changeStatus);
router.post('/:courseId/complete', isAuthenticated, roles(['STUDENT']), courseController.markComplete);
router.get('/completed/mine', isAuthenticated, roles(['STUDENT']), courseController.completed);
export default router;
