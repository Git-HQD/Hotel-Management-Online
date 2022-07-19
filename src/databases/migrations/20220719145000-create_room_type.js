'use strict';
const sequelize = require("sequelize");

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.createTable('room_type',{
        id:{
          allowNull:false,
          primaryKey:true,
          autoIncrement:true,
          type: Sequelize.DataTypes.INTEGER
        },
        room_name:{
          type: Sequelize.DataTypes.STRING
        },
        service_id:{
          type: Sequelize.DataTypes.INTEGER,
          references: {
            model: {
              tableName: 'services',
            },
            key: 'id'
          },
        }
      })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('room_type')
  }
};
