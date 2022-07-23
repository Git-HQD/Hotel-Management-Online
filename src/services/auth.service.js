const db = require("../models/index.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const handleLogin = async (username, password) => {
  const isExist = await checkUsername(username);

  if (isExist) {
    const compare = await bcrypt.compare(password, isExist.password);

    if (!compare) {
      console.log("Invalid Password !");
    }
    return compare;
  }

  return isExist;
};

const checkUsername = async (username) => {
  const found = await db.users.findOne({
    attributes: ["username", "password", "iam_role"],
    where: {
      username,
    },
    raw: true,
  });

  if (!found) {
    console.log("Invalid Username !");
  }

  return found;
};

// const verifyToken = async(token);

module.exports = {
  handleLogin,
  checkUsername,
};
