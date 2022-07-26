const db = require('../models/index.model');
const config = require('../config/authentication');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const login = async (username, password) => {
  const user = await db.users.findOne({
    attributes: ['id', 'username', 'password', 'iam_role'],
    where: {
      username,
    },
  });

  if (!user) {
    code = 401;
    throw new Error('Invalid Username & Password');
  }

  if (user) {
    const compare = await bcrypt.compare(password, user.password);

    if (!compare) {
      code = 401;
      throw new Error('Invalid Username & Password');
    }
  }

  const accessToken = jwt.sign(
    { id: user.id, username, role: user.iam_role },
    config.signature,
    { expiresIn: 900 },
    { algorithm: config.algorithm },
  );

  user.accessToken = accessToken;

  return { user, accessToken };
};

const register = async (data) => {
  const checkUsername = await db.users.findOne({
    where: { username: data.username },
  });

  if (checkUsername) {
    throw new Error('Username is exist');
  }

  const checkEmail = await db.users.findOne({
    where: { email: data.email },
  });

  if (checkEmail) {
    throw new Error('Email is exist');
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

  return { newUser, token };
};

module.exports = {
  login,
  register,
};
