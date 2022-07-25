const db = require('../models/index.model');
const config = require('../config/authentication');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const handleLogin = async (username, password) => {
  const User = await check(username);

  if (User) {
    const compare = await bcrypt.compare(password, User.password);

    if (!compare) {
      throw new Error('Invalid Password !');
    }
  }

  const token = jwt.sign(
    { id: User.id, username },
    config.signature,
    { expiresIn: 60 * 15 },
    { algorithm: config.algorithm },
  );

  User.token = token;

  return { User, token };
};

const check = async (username) => {
  const found = await db.users.findOne({
    attributes: ['id', 'username', 'password'],
    where: {
      username,
    },
  });

  if (!found) {
    throw new Error('Invalid Username !');
  }

  return found;
};

const register = async (data) => {
  const checkUsername = await db.users.findOne({
    where: { username: data.username },
  });

  if (checkUsername) {
    throw new Error(console.error('Username is exist'));
  }

  const checkEmail = await db.users.findOne({
    where: { email: data.email },
  });

  if (checkEmail) {
    throw new Error(console.error('Email is exist'));
  }

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(data.password, salt);

  const newUser = await db.users.create({
    username: data.username,
    first_name: data.first_name,
    last_name: data.last_name,
    email: data.email,
    password: hashPassword,
    address: data.address,
    phone: data.phone,
    iam_role: data.iam_role,
  });

  return { newUser };
};

module.exports = {
  handleLogin,
  check,
  register,
};
