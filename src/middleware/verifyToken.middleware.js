const config = require('../config/authentication');
const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) return res.status(401).json('Access Denied');

  try {
    const { userPayload } = jwt.verify(token, config.signature);
    req.user = userPayload;
    next();
  } catch (err) {
    return res.status(401).json(err);
  }
};

module.exports = verifyToken;
