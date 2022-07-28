const registerValidator = require('../validations/register.validate');
const db = require('../models/index.model');

const checkSyntax = async (req, res, next) => {
  try {
    const { error } = await registerValidator(req.body);

    if (error) {
      res.status(422).send(error.details[0].message);
    }

    next(error);
  } catch (error) {
    res.sendStatus(401).json(error);
  }
};

module.exports = checkSyntax;
