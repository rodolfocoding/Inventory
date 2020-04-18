import Sequelize, { Model } from 'sequelize';

class Inventory extends Model {
  static init(sequelize) {
    super.init(
      {
        inventoryName: Sequelize.STRING,
        userId: Sequelize.STRING,
        ativo: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Inventory;
