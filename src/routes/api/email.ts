import express from 'express';
import emailController from '../../controllers/emailsController';

const { sendEmail } = emailController;
const router = express.Router();
router.post('/', sendEmail);

export default router;
