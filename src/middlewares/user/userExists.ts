import { NextFunction, Request, Response } from 'express';
import response from '../../helpers/response';
import userService from '../../services/user.service';

const { serverError, conflict, badRequest } = response;

export const userExists = async (req:Request, res:Response, next:NextFunction) => {
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

export const tutorExist = async (req:Request, res:Response, next:NextFunction) => {
  try {
    const tutorId = req.params.tutorId || req.body.tutorId;
    const user = await userService.getUserById(parseInt(tutorId));
    if (!user) {
      return badRequest(res, 'Tutor not found');
    }
    const { role } = user.get();
    if (role !== 'TUTOR') {
      return badRequest(res, 'Tutor not found');
    }
    return next();
  } catch (error:any) {
    return serverError(res, error.message);
  }
};

export default { userExists };
