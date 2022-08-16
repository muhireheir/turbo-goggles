import BcryptUtil from '../helpers/Bcrypt';
import { User } from '../models/User';

const userSeeder = async () => {
  await User.bulkCreate([
    {
      firstName: 'John',
      lastName: 'Doe',
      password: BcryptUtil.hashPassword('admin'),
      role: 'ADMIN',
      email: 'admin@shecancode.com',
    },
  ]);
};

export default userSeeder;
