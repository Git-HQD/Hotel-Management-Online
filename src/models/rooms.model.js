module.exports = (sequelize, DataTypes) => {
  const room = sequelize.define(
    "rooms",
    {
      price: DataTypes.DECIMAL,
      number_of_people: DataTypes.INTEGER,
    },
    {
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
      sequelize,
    }
  );

  return room;
};
