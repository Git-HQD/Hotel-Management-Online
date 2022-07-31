const authValidator = require('../validations/auth.validate');

const verifyJSONRigister = async (req, res, next) => {
  try {
    const { error } = await authValidator.registerValidator(req.body);

    next(error);
  } catch (error) {
    res.sendStatus(401).json(error);
  }
};

const verifyJSONLogin = async (req, res, next) => {
  try {
    const { error } = await authValidator.loginValidator(req.body);

    next(error);
  } catch (error) {
    res.sendStatus(401).json(error);
  }
};

module.exports = {
  verifyJSONRigister,
  verifyJSONLogin,
};
