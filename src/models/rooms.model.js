const { Sequelize, DataTypes, Model } = require('sequelize');
const config = require('../config/database');

//Connect Database
const sequelize = new Sequelize(
    config.DB_DATABASE,
    config.DB_USERNAME,
    config.DB_PASSWORD,
    {
        host : config.HOST,
        dialect: config.dialect 
    }
);

class rooms extends Model {}
rooms.init({
  
  id:{
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },  
  room_type_id: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: DataTypes.DECIMAL,
  number_of_people: DataTypes.INTEGER,
}, {
  sequelize,
  modelName: 'rooms' 
});

module.exports = {
    rooms
};
