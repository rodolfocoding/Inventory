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
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      area: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      ativo: {
        type: DataTypes.BOOLEAN,
        defaultValue: 1
      }
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('Users');
  }
};
