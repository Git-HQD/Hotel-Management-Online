const authService = require("../services/auth.service");
const jwt = require("jsonwebtoken");
const config = require("../config/authencation");

const login = async (req, res) => {
  const { username, password } = req.body;
  const id = req.body;

  if (!username || !password) {
    return res.status(404).json({
      message: "Invalid Username & Password",
    });
  }

  const handleLogin = await authService.handleLogin(username, password);

  const token = jwt.sign(
    id,
    config.secret_key,
    // { expiresIn: 60 * 15 },
    config.algorithm,
  );

  return res.status(200).json({
    message: "Login Successfully",
    handleLogin,
    token,
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
