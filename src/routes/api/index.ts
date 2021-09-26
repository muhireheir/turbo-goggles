import express from 'express';
import users from './users';
import tasks from './task';

const router = express.Router();

router.use('/users', users);
router.use('/tasks', tasks);

export default router;
