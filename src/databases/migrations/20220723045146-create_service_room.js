'use strict';

const { DataTypes } = require("sequelize/types");

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('service_rooms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.DataTypes.INTEGER
      },
      service_id: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'services'
          },
          key: 'id'
        }
      },
      room_type_id: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'room_types'
          },
          key: 'id'
        },
        allowNull: false
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('service_rooms')
  }
};
