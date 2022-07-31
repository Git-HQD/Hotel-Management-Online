module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('booking_rooms',{
      id:{
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.DataTypes.INTEGER
      },
      room_id:{
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'rooms',
          },
          key: 'id'
        },
      },
      booking_id:{
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
    return dropTable('booking_rooms')
  }
};
