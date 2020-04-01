'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable("Inventory", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      inventoryName: {
        allowNull: false,
        type: DataTypes.STRING
      },
      ativo: {
        allowNull: false,
        type: DataTypes.BOOLEAN
      },
      user_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {         // User belongsTo Company 1:1
          model: {
            tableName: 'Users',
            key: 'id'
          }
        }
      }
  });
},

  down: (queryInterface) => {
    return queryInterface.dropTable('Inventory');
  }
};
