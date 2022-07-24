require("dotenv").config();

module.exports = {
  "algorithm": process.env.JWT_ALGORITHM,
  "signature": process.env.JWT_SIGNATURE,
};
