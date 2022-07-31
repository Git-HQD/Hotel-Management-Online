const db = require('../models/index.model');
const config = require('../config/email');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const sendEmail = require('../utils/email');
const userService = require('./users.service');

const forgotPassword = async (email) => {
  const user = await db.users.findOne({
    where: {
      email,
    },
  });

  if (!user) {
    throw new Error('Not Found', 404);
  }

  const accessToken = jwt.sign(
    { id: user.id, email: user.email },
    config.signatureForgotPwd,
    { expiresIn: parseInt(config.expiresInForgotPwd) },
  );

  await sendEmail.sendEmailResetPwd({
    reciverEmail: user.email,
    username: user.username,
    redirectLink: `${config.app_url}/forgotPwd/${user.email}`,
  });

  if (!sendEmail) {
    throw new Error('Send Email Unsuccessful !!!');
  }

  return { accessToken };
};

const resetPassword = async (id, newPassword) => {
  const user = await userService.getUser(id);

  const hashNewPassword = await bcrypt.hash(newPassword, parseInt(config.salt));

  user.password = hashNewPassword;

  const resetPassword = await user.save(user);

  return resetPassword;
};

module.exports = {
  forgotPassword,
  resetPassword,
};
