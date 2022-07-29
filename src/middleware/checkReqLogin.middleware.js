const loginValidator = require('../validations/login.validate');

const checkReqLogin = async (req, res, next) => {
  try {
    const { error } = await loginValidator(req.body);

    next(error);
  } catch (error) {
    res.sendStatus(401).json(error);
  }
};

module.exports = checkReqLogin;
