const config = require('../config/authentication');
const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) return res.status(403).json('Access Denied');

  try {
    const decoded = jwt.verify(token, config.signature);
    req.user = decoded;
    next();
  } catch (e) {
    return res.status(401).json('Invalid Token');
  }
};

module.exports = verifyToken;
