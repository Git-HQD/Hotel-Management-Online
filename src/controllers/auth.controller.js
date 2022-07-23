const authService = require("../services/auth.service.js");

const register = async (req, res) => {
  res.status(200).json({
    message: "Register Successfully ! ",
  });
};

const login = async (req, res) => {
  res.status(200).json({
    message: "Login Successfully ! ",
  });
};

const logout = async (req, res) => {
  res.status(200).json({
    message: "Logout Successfully ! ",
  });
};

module.exports = {
  register,
  login,
  logout,
};
