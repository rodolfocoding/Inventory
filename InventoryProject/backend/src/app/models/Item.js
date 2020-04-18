import Sequelize, { Model } from 'sequelize';

class Item extends Model {
  static init(sequelize) {
    super.init(
      {
        itemName: Sequelize.STRING,
        quantidade: Sequelize.BIGINT,
        inventoryId: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Item;
