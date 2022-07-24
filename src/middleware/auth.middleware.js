const config = require("../config/authentication");
const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
  const token = req.headers["x-access-token"];

  if (!token) return res.status(403).json("Unvalid Token !");

  try {
    const decoded = jwt.verify(token, config.signature);
    req.user = decoded;
  } catch (e) {
    return res.status(401).json("Invalid Token");
  }

  return next();
};

module.exports = verifyToken;
