const authService = require('../services/auth.service');

const register = async (req, res) => {
  const data = req.body;

  if (!data) {
    res.status(400).json('All input is required');
  }

  const user = await authService.register(data);

  return res.status(201).json({
    user,
    message: 'Register Successfully',
  });
};

const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(422).json({
      message: 'Username or Password is not correct',
    });
  }

  const handleLogin = await authService.login(username, password);

  return res.status(200).json({
    message: 'Login Successfully',
    handleLogin,
  });
};

const logout = async (req, res) => {
  return res.status(200).json({
    message: 'Logout Successfully',
  });
};

module.exports = {
  register,
  login,
  logout,
};
