module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "users",
    {
      username: DataTypes.STRING,
      first_name: DataTypes.STRING,
      last_name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      address: DataTypes.STRING,
      phone: DataTypes.STRING,
      iam_role: DataTypes.ENUM("Administrator", "Customer", "Employeer"),
    },
    {
      timestamps: true,
      sequelize,
    }
  );

  return User;
};
