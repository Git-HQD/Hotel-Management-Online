module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.createTable('rooms',{
        id:{
          allowNull: false,
          primaryKey: true ,
          autoIncrement: true,
          type: Sequelize.DataTypes.INTEGER,
        },
        room_type_id:{
          type: Sequelize.DataTypes.INTEGER,
          references: {
            model: {
              tableName: 'room_type',
            },
            key: 'id'
          },
        },
        price:{
          type: Sequelize.DataTypes.DECIMAL
        },
        number_of_people:{
          type: Sequelize.DataTypes.INTEGER
        }
      }) 
 },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('rooms')
  }
};
