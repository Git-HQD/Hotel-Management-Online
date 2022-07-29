const Joi = require('joi');

const registerValidator = async (data) => {
  const rule = Joi.object({
    username: Joi.string().alphanum().min(6).max(30).required(),
    first_name: Joi.string().min(2).required(),
    last_name: Joi.string().min(2).required(),
    email: Joi.string().min(6).max(225).required().email(),
    password: Joi.string()
      .min(6)
      .max(20)
      .pattern(new RegExp('^[a-zA-Z0-9]{6,20}$'))
      .required(),
    address: Joi.string().min(6).max(225).required(),
    phone: Joi.string().min(6).max(225).required(),
    role: Joi.string().valid('admin', 'customer', 'employeer').required(),
  });

  return rule.validate(data);
};

module.exports = registerValidator;
