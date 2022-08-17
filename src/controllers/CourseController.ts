import { Request, Response } from 'express';
import response from '../helpers/response';
import courseService from '../services/course.service';

const courseController = {
  create: async (req: Request, res: Response) => {
    try {
      req.body = { ...req.body, tutorId: req.user?.id };
      await courseService.addCourse(req.body);
      return response.success(res, 'Course added!', {});
    } catch (error:any) {
      return response.serverError(res, error.message);
    }
  },
  changeStatus: async (req: Request, res: Response) => {
    try {
      await courseService.update({ isEnabled: !req.body.courseStatus },
        parseInt(req.params.courseId));
      return response.success(res, 'Course status changed!', {});
    } catch (error:any) {
      return response.serverError(res, error.message);
    }
  },
  getAllCourses: async (req: Request, res: Response) => {
    try {
      const courses = await courseService.getAll();
      return response.success(res, 'coures fetched', courses);
    } catch (error:any) {
      return response.serverError(res, error.message);
    }
  },
  viewCourse: async (req: Request, res: Response) => {
    try {
      const course = await courseService.getCourseById(parseInt(req.params.courseId));
      return response.success(res, 'coure fetched', course);
    } catch (error:any) {
      return response.serverError(res, error.message);
    }
  },
  markComplete: async (req: Request, res: Response) => {
    try {
      const id = req.user?.id as number;
      const courseId = req.params.courseId as unknown as number;
      const isCompleted = await courseService.isCompleted({ courseId, userId: id });
      if (!isCompleted) {
        const course = await courseService.complete({ courseId, userId: id });
        return response.success(res, 'course completed', course);
      }
      return response.success(res, 'course alredy completed', isCompleted);
    } catch (error:any) {
      return response.serverError(res, error.message);
    }
  },
  completed: async (req: Request, res: Response) => {
    try {
      const id = req.user?.id as number;
      const courses = await courseService.completed(id);
      return response.success(res, 'courses completed', courses);
    } catch (error:any) {
      return response.serverError(res, error.message);
    }
  },
};

export default courseController;
