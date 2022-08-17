import express, { Router } from 'express';
import { isAuthenticated } from '../../middlewares/auth/index';
import userController from '../../controllers/UserController';
import { userExists } from '../../middlewares/user/userExists';
import validatation from '../../validators/user';

const router: Router = express.Router();
const {
  register, login, getAllUsers, addUser,
} = userController;
router.post('/register', userExists, validatation.validateSignupBody, register);
router.post('/login', validatation.validateLoginBody, login);
router.post('/', userExists, validatation.addUserBody, addUser);
router.get('/', isAuthenticated, getAllUsers);

export default router;
