/* eslint-disable no-restricted-syntax */
import { NextFunction, Request, Response } from 'express';
import response from '../../helpers/response';
import courseService from '../../services/course.service';

export const courseExists = async (req:Request, res:Response, next:NextFunction) => {
  try {
    const courseId = req.params.courseId || req.body.courseId;
    const getCourse = await courseService.getCourseById(courseId);
    if (!getCourse) {
      return response.badRequest(res, 'Course not found');
    }
    req.body.courseStatus = getCourse.get().isEnabled;
    return next();
  } catch (error:any) {
    return response.serverError(res, error.message);
  }
};

export default { courseExists };
