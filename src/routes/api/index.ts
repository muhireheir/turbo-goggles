import express from 'express';
import user from './user';
import classRoutes from './class';
import courseRoutes from './course';

const router = express.Router();
router.use('/users', user);
router.use('/class', classRoutes);
router.use('/courses', courseRoutes);

export default router;
