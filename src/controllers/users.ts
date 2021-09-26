import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import UserModel from '../database/models/user';
import createToken from '../helpers/createToken';
import response from '../helpers/response';

const { serverError, success, badRequest } = response;
const users = {
  createUser: async (req: Request, res: Response) => {
    try {
      const { body } = req;
      const { password } = body;
      const userPassword = await bcrypt.hash(password, 10);
      const userWithPassword = { ...body, password: userPassword };
      const user = new UserModel(userWithPassword);
      const {
        _id, role, firstName, lastName, email,
      } = await user.save();
      const token = createToken({ _id, role, email });
      return success(res, 'User created!', {
        token,
        user: {
          _id, role, firstName, lastName, email,
        },
      });
    } catch (error: any) {
      return serverError(res, error.message);
    }
  },
  logIn: async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;
      const user = await UserModel.findOne({ email });
      if (!user) {
        return badRequest(res, 'Incorrect email or password!');
      }
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return badRequest(res, 'Incorrectemail or password!');
      }
      const {
        _id, role, firstName, lastName,
      } = user;
      const token = createToken({ _id, role, email });
      return success(res, 'User logged in!', {
        token,
        user: {
          _id, role, firstName, lastName, email,
        },
      });
    } catch (error: any) {
      return serverError(res, error.message);
    }
  },
};

export default users;
