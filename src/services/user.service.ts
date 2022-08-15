import { User } from '../models/User';

const userService = {
  getUserByEmail: (email: string) => User.findOne({ where: { email } }),
  getAllUsers: () => User.findAll({
    attributes: {
      exclude: ['password', 'createdAt', 'updatedAt'],
    },
  }),
};

export default userService;
