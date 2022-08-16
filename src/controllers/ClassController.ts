import { Request, Response } from 'express';
import classService from '../services/class.service';
import response from '../helpers/response';

const classController = {
  create: async (req: Request, res: Response) => {
    try {
      await classService.create(req.body);
      return response.success(res, 'Classes added!', { });
    } catch (error:any) {
      return response.serverError(res, error.message);
    }
  },
  getAll: async (req: Request, res: Response) => {
    try {
      const allClasses = await classService.getAll();
      return response.success(res, 'success', allClasses);
    } catch (error:any) {
      return response.serverError(res, error.message);
    }
  },
  addStudents: async (req: Request, res: Response) => {
    try {
      await classService.addStudents(req.body);
      return response.success(res, 'Students added successfully', { });
    } catch (error:any) {
      return response.serverError(res, error.message);
    }
  },
  assignTutor: async (req: Request, res: Response) => {
    try {
      await classService.update({ tutorId: parseInt(req.params.tutorId) },
        parseInt(req.params.classId));
      return response.success(res, 'Tutor assigned to a class', { });
    } catch (error:any) {
      return response.serverError(res, error.message);
    }
  },
};

export default classController;
