const db = require("../models/index.model");
const config = require("../config/authentication");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const handleLogin = async (username, password) => {
  const User = await check(username);

  if (User) {
    const compare = await bcrypt.compare(password, User.password);

    if (!compare) {
      console.log("Invalid Password !");
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
    attributes: ["id", "username", "password"],
    where: {
      username,
    },
  });

  if (!found) {
    console.log("Invalid Username !");
  }

  return found;
};

module.exports = {
  handleLogin,
  check,
};
