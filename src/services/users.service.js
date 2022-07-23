const db = require("../models/index.model");
const bcrypt = require("bcryptjs");

const SALT = bcrypt.genSaltSync(10);

const hashPassword = async (password) => {
  return bcrypt.hashSync(password, SALT);
};

const getAll = async () => {
  const users = await db.users.findAll();

  return users;
};

const getUser = async (userId) => {
  const user = await db.users.findOne({
    where: { id: userId },
  });

  if (!user) {
    throw new Error("User Not Found");
  }

  return user;
};

const createUser = async (data) => {
  const hashPwdBcrypt = await hashPassword(data.password);

  return db.users.create({
    username: data.username,
    first_name: data.first_name,
    last_name: data.last_name,
    email: data.email,
    password: hashPwdBcrypt,
    address: data.address,
    phone: data.phone,
    iam_role: data.iam_role,
  });
};

const updateUser = async (userId, data) => {
  const user = await getUser(userId);

  user.first_name = data.first_name;
  user.last_name = data.last_name;
  user.address = data.address;

  await user.save(user);

  return user;
};

const deleteUser = async (userId, data) => {
  const user = await getUser(userId);

  await user.destroy(data);
};

module.exports = {
  getAll,
  getUser,
  createUser,
  hashPassword,
  updateUser,
  deleteUser,
};
