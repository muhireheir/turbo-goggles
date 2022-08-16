import { NextFunction, Request, Response } from 'express';
import response from '../../helpers/response';
import schemas from './schema';

const { courseSchema } = schemas;

const { badRequest, serverError } = response;
const newCourse = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { error } = courseSchema.validate(req.body);
    if (error) {
      return badRequest(res, error);
    }
    return next();
  } catch (error: any) {
    return serverError(res, error.message);
  }
};

export default { newCourse };
