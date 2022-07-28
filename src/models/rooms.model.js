module.exports = (sequelize, DataTypes) => {
  const room = sequelize.define(
    "rooms",
    {
      price: DataTypes.DECIMAL,
      number_of_people: DataTypes.INTEGER,
    },
    {
      timestamps: true,
      sequelize,
    }
  );

  return room;
};
