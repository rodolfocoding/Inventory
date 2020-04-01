module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("Inventory", {
      inventoryName: DataTypes.STRING,
      ativo: DataTypes.BOOLEAN,
      user_id: DataTypes.INTEGER
    });
  
    return Inventory;
  };
  