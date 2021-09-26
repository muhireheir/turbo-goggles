import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import dotenv from 'dotenv';
import response from '../helpers/response';

dotenv.config();
interface User{
    _id: string;
    role: string;
    email: string;
}
const { serverError, badRequest } = response;
const verifyToken = (req:Request, res:Response, next:NextFunction) => {
  try {
    const bearerToken = req.headers.authorization;

    const secretkey: any = process.env.JWT_KEY;
    if (bearerToken) {
      const token = bearerToken.split(' ')[1];
      const decoded = jwt.verify(token, secretkey);
      req.user = <User>decoded;
      return next();
    }
    return badRequest(res, 'Token is not valid');
  } catch (err:any) {
    return serverError(res, err.message);
  }
};

export default verifyToken;
