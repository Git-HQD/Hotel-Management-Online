'use strict';

const { toDefaultValue } = require("sequelize/types/utils");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.DataTypes.INTEGER
      },
      first_name: {
        type: Sequelize.DataTypes.STRING
      },
      last_name: {
        type: Sequelize.DataTypes.STRING
      },
      
      email: {
        type: Sequelize.DataTypes.STRING
      },
      password: {
        type: Sequelize.DataTypes.STRING
      },
      address: {
        type: Sequelize.DataTypes.STRING
      },
      phone: {
        type: Sequelize.DataTypes.STRING
      },
      role: {
        type: Sequelize.DataTypes.ENUM('admin', 'custommer', 'employee')
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};