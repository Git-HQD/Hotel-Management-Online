require('dotenv').config();

module.exports = {
  signature: process.env.JWT_SIGNATURE,
  expiresInLogin: process.env.JWT_EXPIRES_IN_lOGIN,

  salt: process.env.SALT,
};
