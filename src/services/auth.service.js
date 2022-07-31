const db = require('../models/index.model');
const config = require('../config/authentication');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const userService = require('../services/users.service');
const { Op } = require('sequelize');

const handleLogin = async (username, password) => {
  const user = await db.users.findOne({
    where: {
      username,
    },
  });

  if (!user) {
    throw new Error('Invalid Username & Password', 404);
  }

  const compare = await bcrypt.compare(password, user.password);

  if (!compare) {
    throw new Error('Invalid Username & Password', 404);
  }

  const accessToken = jwt.sign(
    { id: user.id, username, role: user.role },
    config.signature,
    { expiresIn: parseInt(config.expiresInLogin) },
  );

  return accessToken;
};

const register = async (data) => {
  const isExist = await db.users.findOne({
    where: {
      [Op.or]: [{ username: data.username }, { email: data.email }],
    },
  });

  if (isExist) {
    throw new Error('Already Exist !', 501);
  }

  const newUser = await userService.createUser(data);

  return { newUser };
};

const handleChangePassword = async (id, password, newPassword) => {
  const user = await handleLogin.user(id);

  const compare = await bcrypt.compare(password, user.password);

  if (!compare) {
    throw new Error('Incorrect Password , Please re-enter !');
  }

  const hashNewPassword = await bcrypt.hash(newPassword, parseInt(config.salt));

  user.password = hashNewPassword;

  const changePassword = await user.save(user);

  return changePassword;
};

module.exports = {
  handleLogin,
  register,
  handleChangePassword,
};
