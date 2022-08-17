import { Request, Response } from 'express';
// import { v4 } from 'uuid';
import { User } from '../models/User';
import BcryptUtil from '../helpers/Bcrypt';
import response from '../helpers/response';
import createToken from '../helpers/createToken';
import userService from '../services/user.service';

interface userInt {
    password: string
}
const UserController = {
  register: async (req: Request, res: Response) => {
    try {
      const password = BcryptUtil.hashPassword(req.body.password);
      const user = await User.create({ ...req.body, password });
      const token = createToken({ email: user.get().email, role: user.get().role });
      return response.success(res, 'Account created', { token, role: user.get().role, email: user.get().email });
    } catch (error:any) {
      return response.serverError(res, error.message);
    }
  },
  login: async (req: Request, res: Response) => {
    try {
      const user = await userService.getUserByEmail(req.body.email);
      if (!user) {
        return response.badRequest(res, 'Incorrect username or password');
      }
      const { password } = user.get() as userInt;
      const passwordMatches = BcryptUtil.comparePassword(req.body.password, password);
      if (!passwordMatches) {
        return response.badRequest(res, 'Incorrect username or password');
      }
      const token = createToken({ email: user.get().email, role: user.get().role });
      return response.success(res, 'Logged in successfully', { token, role: user.get().role, email: user.get().email });
    } catch (error:any) {
      return response.serverError(res, error.message);
    }
  },
  addUser: async (req: Request, res: Response) => {
    const generatedPassword = 'default123';
    const password = BcryptUtil.hashPassword(generatedPassword);
    const user = await User.create({ ...req.body, password, role: 'TUTOR' });
    return response.success(res, 'Account created', { role: user.get().role, email: user.get().email });
  },
  getAllUsers: async (req: Request, res: Response) => {
    try {
      const allUsers = await userService.getAllUsers();
      return response.success(res, 'Success', allUsers);
    } catch (error:any) {
      return response.serverError(res, error.message);
    }
  },
};
export default UserController;
