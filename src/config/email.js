require('dotenv').config();

module.exports = {
  mailer: process.env.EMAIL_MAILER,
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  app: process.env.EMAIL_APP,
  app_password: process.env.EMAIL_APP_PASSWORD,
  app_url: process.env.APP_URL,

  signatureForgotPwd: process.env.JWT_SIGNATURE_FORGOT_PWD,
  expiresInForgotPwd: process.env.JWT_EXPIRES_IN_FORGOT_PWD,

  salt: process.env.SALT,
};
