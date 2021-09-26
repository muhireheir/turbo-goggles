import express from 'express';
import usersController from '../../controllers/users';
import userValidator from '../../validators/user';
import userMiddleWare from '../../middlewares/users';

const { userExist } = userMiddleWare;
const { validateNewUserData, validatecredentials } = userValidator;
const { createUser, logIn } = usersController;
const router = express.Router();
router.post('/', validateNewUserData, userExist, createUser);
router.post('/login', validatecredentials, logIn);

export default router;
