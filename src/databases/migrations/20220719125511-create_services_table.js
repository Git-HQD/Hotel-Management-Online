module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('services',{
      id: {
        allowNull: false,
        primaryKey:true,
        autoIncrement: true,
        type: Sequelize.DataTypes.INTEGER,
      },
      name:{
        type: Sequelize.DataTypes.STRING,
      },
      price:{
        type: Sequelize.DataTypes.DECIMAL
      },
      room_type_id:{
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'room_type'
          },
          key: 'id'
        },
        allowNull: false
      }
    })
 },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('services')
  }
};
