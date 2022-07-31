const db = require('../models/index.model');
const config = require('../config/authentication');
const bcrypt = require('bcryptjs');

const getAll = async () => {
  const users = await db.users.findAll();

  return users;
};

const getUser = async (userId) => {
  const user = await db.users.findOne({
    where: { id: userId },
  });

  if (!user) {
    throw new Error('User Not Found');
  }

  return user;
};

const createUser = async (data) => {
  const hashPassword = await bcrypt.hash(data.password, parseInt(config.salt));

  return db.users.create({
    username: data.username,
    first_name: data.first_name,
    last_name: data.last_name,
    email: data.email,
    password: hashPassword,
    address: data.address,
    phone: data.phone,
    role: data.role,
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
  updateUser,
  deleteUser,
};
