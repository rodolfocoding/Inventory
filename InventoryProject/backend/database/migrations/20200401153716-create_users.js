module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      companyName: {
        allowNull: false,
        type: DataTypes.STRING
      },
      username: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true
      },
      password_hash: {
        llowNull: false,
        type: DataTypes.STRING,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true
      },
      area: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      ativo: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
      }
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('Users');
  }
};
