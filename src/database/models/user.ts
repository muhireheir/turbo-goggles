import { Schema, model } from 'mongoose';

interface User{
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: string;
}
const userSchema = new Schema<User>({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    required: true,
    type: String,
    unique: true,
  },
  password: {
    required: true,
    type: String,
  },
  role: {
    type: String,
    required: true,
    default: 'user',
  },
});

export default model <User>('user', userSchema);
