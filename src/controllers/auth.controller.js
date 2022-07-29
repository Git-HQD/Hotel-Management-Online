const authService = require('../services/auth.service');

const register = async (req, res, next) => {
  const data = req.body;

  try {
    await authService.register(data);

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
    const handleLogin = await authService.handleLogin(username, password);

    res.status(200).json({
      message: 'Login Successfully',
      handleLogin,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  register,
  login,
};
