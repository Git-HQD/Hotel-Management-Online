module.exports = (sequelize, DataTypes) => {
    const service = sequelize.define(
      "Service",
      {
        name: DataTypes.STRING,
        price: DataTypes.DECIMAL,
      },
      {
        timestamps: false,
        sequelize,
      }
    );
  
    return service;
  };
  