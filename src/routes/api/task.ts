import express from 'express';
import tasksController from '../../controllers/tasks';
import auth from '../../middlewares/authenticated';

const { createTask, myTasks } = tasksController;
const router = express.Router();
router.post('/', auth, createTask);
router.get('/me', auth, myTasks);

export default router;
