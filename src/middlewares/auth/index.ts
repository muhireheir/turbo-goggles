import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';
import response from '../../helpers/response';
import { userFields } from '../../models/User';
import userService from '../../services/user.service';

dotenv.config();

const { serverError, badRequest } = response;
export const isAuthenticated = async (req:Request, res:Response, next:NextFunction) => {
  try {
    const bearerToken = req.headers.authorization;
    const secretkey: any = process.env.JWT_KEY;
    if (bearerToken) {
      const token = bearerToken.split(' ')[1];
      const decoded = <userFields>jwt.verify(token, secretkey);
      const user = await userService.getUserByEmail(decoded.email as string);
      req.user = user?.get();
      return next();
    }
    return badRequest(res, 'Not logged in');
  } catch (err:any) {
    return serverError(res, err.message);
  }
};
// eslint-disable-next-line max-len
export const roles = (allowedRoles:Array<string>) => (req:Request, res:Response, next:NextFunction) => {
  try {
    if (!allowedRoles.includes(req.user?.role as string)) {
      return response.forbidden(res, 'Not allowed to access this');
    }
    return next();
  } catch (err:any) {
    return serverError(res, err.message);
  }
};
export default { isAuthenticated, roles };
