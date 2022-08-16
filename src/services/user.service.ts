import { User } from '../models/User';

const userService = {
  getUserByEmail: (email: string) => User.findOne({ where: { email } }),
  getAllUsers: () => User.findAll({
    attributes: {
      exclude: ['password', 'createdAt', 'updatedAt'],
    },
  }),
  getUserById: (id:number) => User.findByPk(id),
  getUsersByrole: (role:string) => User.findAll({ where: { role } }),
};

export default userService;
