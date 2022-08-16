import express, { Router } from 'express';
import { isAuthenticated } from '../../middlewares/auth/index';
import { tutorExist } from '../../middlewares/user/userExists';
import { classExist, getStudents } from '../../middlewares/class/index';
import classController from '../../controllers/ClassController';
import validations from '../../validators/class/class.validations';

const router: Router = express.Router();
const {
  create, getAll, addStudents, assignTutor, getCourses,
} = classController;

router.post('/', validations.newclassBody, create);
router.get('/', getAll);
router.post('/:classId', classExist, getStudents, addStudents);
router.put('/:classId/tutor/:tutorId', classExist, tutorExist, assignTutor);
router.get('/:classId/courses', isAuthenticated, getCourses);

export default router;
