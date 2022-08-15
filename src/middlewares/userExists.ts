import { NextFunction, Request, Response } from 'express';
import response from '../helpers/response';
import userService from '../services/user.service';

const { serverError, conflict } = response;

const userExists = async (req:Request, res:Response, next:NextFunction) => {
  try {
    const user = await userService.getUserByEmail(req.body.email);
    if (user) {
      return conflict(res, 'Email already exists');
    }
    return next();
  } catch (error:any) {
    return serverError(res, error.message);
  }
};

export default userExists;
