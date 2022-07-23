const authService = require("../services/auth.service.js");

const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(404).json({
      message: "Invalid Username & Password",
    });
  }

  const handleLogin = await authService.handleLogin(username, password);

  res.status(200).json(handleLogin);
};

const logout = async (req, res) => {
  res.status(200).json({
    message: "Logout Successfully !",
  });
};

const register = async (req, res) => {
  res.status(201).json({
    message: "Register Successfully !",
  });
};

module.exports = {
  register,
  login,
  logout,
};
