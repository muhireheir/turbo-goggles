import bcrypt from 'bcrypt';

class BcryptUtil {
  static hashPassword(password:string) {
    return bcrypt.hashSync(password, 10);
  }

  static comparePassword(plainPassword:string, hashPassword:string) {
    return bcrypt.compareSync(plainPassword, hashPassword);
  }
}

export default BcryptUtil;
