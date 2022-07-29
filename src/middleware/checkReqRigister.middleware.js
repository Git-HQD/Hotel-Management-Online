const registerValidator = require('../validations/register.validate');

const checkReqRigister = async (req, res, next) => {
  try {
    const { error } = await registerValidator(req.body);

    next(error);
  } catch (error) {
    res.sendStatus(401).json(error);
  }
};

module.exports = checkReqRigister;
