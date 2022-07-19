'use strict';

const sequelize = require("sequelize");

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('services',{
      id: {
        allowNull: false,
        primaryKey:true,
        autoIncrement: true,
        type: Sequelize.DataTypes.INTEGER,
      },
      name_id:{
        type: Sequelize.DataTypes.INTEGER
      },
      price:{
        type: Sequelize.DataTypes.DECIMAL
      },
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('services')
    }
};
