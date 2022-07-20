module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('bookings',{
     id:{
      allowNull: false,
      primaryKey:true,
      autoIncrement: true,
      type: Sequelize.DataTypes.INTEGER
     },
     user_id:{
      type: Sequelize.DataTypes.INTEGER,
      references: {
        model: {
          tableName: 'users',
        },
        key: 'id'
      },
     },
     price:{
      type: Sequelize.DataTypes.DECIMAL
     },
     check_in:{
      type: Sequelize.DataTypes.DATE
     },
     check_out:{
      type: Sequelize.DataTypes.DATE
     },
     booking_date:{
      type: Sequelize.DataTypes.DATE
     }
    })
  },

  async down (queryInterface, Sequelize) {
    return dropTable('bookings')
  }
};
