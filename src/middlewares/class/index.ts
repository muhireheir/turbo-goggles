/* eslint-disable no-restricted-syntax */
import { NextFunction, Request, Response } from 'express';
import classService from '../../services/class.service';
import response from '../../helpers/response';
import userService from '../../services/user.service';

export const classExist = async (req:Request, res:Response, next:NextFunction) => {
  try {
    const { classId } = req.params;
    const getClass = await classService.getclassById(parseInt(classId));
    if (!getClass) {
      return response.badRequest(res, 'Class not found');
    }
    return next();
  } catch (error:any) {
    return response.serverError(res, error.message);
  }
};

export const getStudents = async (req:Request, res:Response, next:NextFunction) => {
  try {
    const studentsToAadd:[] = req.body.students;
    const students:[] = [];
    for (const student of studentsToAadd) {
      const studentExists = await userService.getUserById(student);
      if (studentExists) {
        if (studentExists.get().role !== 'STUDENT') {
          continue;
        }
        students.push(student);
      }
    }
    req.body = students.map((student) => ({
      classId: req.params.classId,
      userId: student,
    }));
    return next();
  } catch (error:any) {
    return response.serverError(res, error.message);
  }
};

export default { classExist };
