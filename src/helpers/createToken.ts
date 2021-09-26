import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const createToken = (data: any) => {
  const secretkey :any = process.env.JWT_KEY;
  return jwt.sign(data, secretkey, {
    expiresIn: '1h',
  });
};
export default createToken;
