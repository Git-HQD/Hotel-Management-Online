const authService = require('../services/auth.service');

const register = async (req, res, next) => {
  try {
    await authService.hangleRegister(req.body.data);

    res.status(201).json({
      message: 'Register Successfully',
    });
  } catch (err) {
    next(err);
  }
};

const login = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    const tokens = await authService.handleLogin(username, password);

    res.status(200).json({
      message: 'Login Successfully',
      tokens,
    });
  } catch (err) {
    next(err);
  }
};

const changePassword = async (req, res, next) => {
  const { id } = req.params;
  const { password, newPassword } = req.body;

  try {
    await authService.handleChangePassword(id, password, newPassword);

    res.status(200).json({
      message: 'Change Password Successfully',
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  register,
  login,
  changePassword,
};
