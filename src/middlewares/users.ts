import { Response, Request, NextFunction } from 'express';
import user from '../database/models/user';
import response from '../helpers/response';

const { serverError, conflict } = response;
const userExist = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email } = req;
    const findUser = await user.find({ email }).exec();
    if (!findUser[0]) {
      return next();
    }
    return conflict(res, `${email} is used by another user `);
  } catch (error: any) {
    return serverError(res, error.message);
  }
};

export default { userExist };
