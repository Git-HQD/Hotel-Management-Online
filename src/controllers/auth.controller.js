const authService = require("../services/auth.service");
const config = require("../config/authentication");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(404).json({
      message: "Invalid Username & Password",
    });
  }

  const handleLogin = await authService.handleLogin(username, password);

  if (!handleLogin) {
    return res.status(404).json({
      message: "Login Unsuccessful !",
    });
  }

  return res.status(200).json({
    message: "Login Successfully",
  });
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
