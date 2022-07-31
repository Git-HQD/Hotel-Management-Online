module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.DataTypes.INTEGER
      },
      username: {
        type: Sequelize.DataTypes.STRING
      },
      password: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      first_name: {
        type: Sequelize.DataTypes.STRING
      },
      last_name: {
        type: Sequelize.DataTypes.STRING
      },
      email: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      address: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      phone: {
        type: Sequelize.DataTypes.STRING,
      },
      role: {
        type: Sequelize.DataTypes.ENUM('admin', 'customer', 'employee')
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
        defaultValue: Sequelize.NOW
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
        defaultValue: Sequelize.NOW
      }
    });
  }, 

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};
