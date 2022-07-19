'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('booking_room',{
      id:{
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.DataTypes.INTEGER
      },
      rooms_id:{
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'rooms',
          },
          key: 'id'
        },
      },
      bookings_id:{
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'bookings',
          },
          key: 'id'
        },
      }
    })
  },

  async down (queryInterface, Sequelize) {
    return dropTable('booking_room')
  }
};
