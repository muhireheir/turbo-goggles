import { Request, Response } from 'express';
import response from '../helpers/response';
import Task from '../database/models/tasks';

interface User{
    _id?: any;
    email?: string;
    role?: string;
}

const { serverError, success } = response;
const tasksController = {
  createTask: async (req:Request, res:Response) => {
    try {
      const { body: { title, description }, user } = req;
      const { _id } = <User>user;
      const newTask = new Task({
        title,
        description,
        user: _id,
        createdAt: new Date(),
      });
      const createdTask = await newTask.save();
      success(res, 'Task created successfully', createdTask);
    } catch (error: any) {
      serverError(res, error.message);
    }
  },
  myTasks: async (req:Request, res:Response) => {
    try {
      const { user } = req;
      const { _id } = <User>user;
      const tasks = await Task.find({ user: _id }).exec();
      success(res, 'Tasks found successfully', tasks);
    } catch (error: any) {
      serverError(res, error.message);
    }
  },

};

export default tasksController;
