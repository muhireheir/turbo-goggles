import { Response } from 'express';

const success = (res: Response, message: string, data: unknown) => {
  const resp = res.status(200).json({ message, data });
  return resp;
};
const badRequest = (res: Response, message: unknown) => res.status(400).json({ message });
const forbidden = (res: Response, message: unknown) => res.status(403).json({ message });
const conflict = (res: Response, message: unknown) => res.status(409).json({ message });
const serverError = (res: Response, message: any) => res.status(500).json({ message });
export default {
  success, serverError, badRequest, conflict, forbidden,
};
