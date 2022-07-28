const db = require('../models/index.model');
const config = require('../config/authentication');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const login = async (username, password) => {
  const user = await db.users.findOne({
    where: {
      username,
    },
  });
  if (!user) {
    throw new Error('Invalid Username & Password');
  }

  if (user) {
    const compare = await bcrypt.compare(password, user.password);

    if (!compare) {
      throw new Error('Invalid Username & Password');
    }
  }

  const accessToken = jwt.sign(
    { id: user.id, username, role: user.iam_role },
    config.signature,
    { expiresIn: parseInt(config.expiresInLogin) },
  );

  return accessToken;
};

const register = async (data) => {
  const userExists = await db.users.findOne({
    where: { username: data.username },
  });

  if (userExists) {
    throw new Error('Username is exist');
  }

  const emailExists = await db.users.findOne({
    where: { email: data.email },
  });

  if (emailExists) {
    throw new Error('Email is exist');
  }
  const hashPassword = await bcrypt.hash(data.password, parseInt(config.salt));

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
  login,
  register,
};
