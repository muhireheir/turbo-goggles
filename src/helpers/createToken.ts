import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
interface tokenData{
  email?: string;
  role?: string;
}
const createToken = (data:tokenData) => {
  const secretkey :any = process.env.JWT_KEY;
  return jwt.sign(data, secretkey, {
    expiresIn: '1h',
  });
};
export default createToken;
