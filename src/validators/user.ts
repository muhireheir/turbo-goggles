import { NextFunction, Request, Response } from 'express';
import response from '../helpers/response';
import userSchema from './UserSchema';

const { newUserSchema, existinguserSchema, addUserSchema } = userSchema;

const { badRequest, serverError } = response;
const validateSignupBody = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { error } = newUserSchema.validate(req.body);

    if (error) {
      return badRequest(res, error);
    }
    return next();
  } catch (error: any) {
    return serverError(res, error.message);
  }
};
const addUserBody = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { error } = addUserSchema.validate(req.body);

    if (error) {
      return badRequest(res, error);
    }
    return next();
  } catch (error: any) {
    return serverError(res, error.message);
  }
};

const validateLoginBody = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { error } = existinguserSchema.validate(req.body);

    if (error) {
      return badRequest(res, error);
    }
    return next();
  } catch (error: any) {
    return serverError(res, error.message);
  }
};

export default { validateSignupBody, validateLoginBody, addUserBody };
