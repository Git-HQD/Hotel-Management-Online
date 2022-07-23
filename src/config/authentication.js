require("dotenv").config();

module.exports = {
  algorithm: process.env.JWT_ALGORITHM,
  secret_key: process.env.JWT_SECRET_KEY,
};
