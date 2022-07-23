module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('bookings', {
      id: {
        allowNull: false,
        primaryKey:true,
        autoIncrement: true,
        type: Sequelize.DataTypes.INTEGER
      },
      user_id: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'users',
          },
          key: 'id'
        },
      },
      price: {
        type: Sequelize.DataTypes.DECIMAL
      },
      check_in: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false
      },
      check_out: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false
      },
      booking_date: {
        type: Sequelize.DataTypes.DATE,
        allowNull: false
      },
      status: {
        type: Sequelize.DataTypes.ENUM('comfirmed', 'cancelled', 'pendding', 'check_in', 'check_out')
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
    })
  },

  async down (queryInterface, Sequelize) {
    return dropTable('bookings')
  }
};
