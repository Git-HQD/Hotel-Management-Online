const forgotPwdService = require('../services/forgotPassword.service');

const forgotPassword = async (req, res, next) => {
  try {
    const forgotPassword = await forgotPwdService.forgotPassword(
      req.body.email,
    );

    res.status(200).json({
      message: 'Please Check Your Email For A New Password',
      forgotPassword,
    });
  } catch (err) {
    next(err);
  }
};

const resetPassword = async (req, res, next) => {
  const { id } = req.params;
  const { newPassword } = req.body;

  try {
    await forgotPwdService.resetPassword(id, newPassword);

    res.status(200).json({
      message: 'Reset Password Successfully',
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  forgotPassword,
  resetPassword,
};
