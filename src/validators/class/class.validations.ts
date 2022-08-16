import { NextFunction, Request, Response } from 'express';
import response from '../../helpers/response';
import classSchema from './schema';

const { newClassSchema } = classSchema;

const { badRequest, serverError } = response;
const newclassBody = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { error } = newClassSchema.validate(req.body);
    if (error) {
      return badRequest(res, error);
    }
    return next();
  } catch (error: any) {
    return serverError(res, error.message);
  }
};

export default { newclassBody };
