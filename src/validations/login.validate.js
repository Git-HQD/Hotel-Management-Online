const Joi = require('joi');

const registerValidator = async (data) => {
  const rule = Joi.object({
    username: Joi.string().alphanum().min(1).required(),
    password: Joi.string().min(1).required(),
  });

  return rule.validate(data);
};

module.exports = registerValidator;
