import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        companyName: Sequelize.STRING,
        username: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
        area: Sequelize.STRING,
        ativo: Sequelize.BOOLEAN,
        email: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    this.addHook('beforeSave', async (user) => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });

    return this;
  }
  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

export default User;
