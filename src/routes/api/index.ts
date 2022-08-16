import express from 'express';
import user from './user';
import classRoutes from './class';

const router = express.Router();
router.use('/users', user);
router.use('/class', classRoutes);

export default router;
