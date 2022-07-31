module.exports = (sequelize, DataTypes) => {
    const service = sequelize.define(
      "Service",
      {
        name: DataTypes.STRING,
        price: DataTypes.DECIMAL,
      },
      {
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        sequelize,
      }
    );
  
    return service;
  };
  