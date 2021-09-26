import { NextFunction, Request, Response } from 'express';
import response from '../helpers/response';
import userSchema from './UserSchema';

const { newUserSchema, existinguserSchema } = userSchema;

const { badRequest, serverError } = response;
const validateNewUserData = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { error } = newUserSchema.validate(req.body);

    if (error) {
      return badRequest(res, error);
    }
    const { body: { email } } = req;
    req.email = email;
    return next();
  } catch (error: any) {
    return serverError(res, error.message);
  }
};
const validatecredentials = (req: Request, res: Response, next: NextFunction) => {
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

export default { validateNewUserData, validatecredentials };
