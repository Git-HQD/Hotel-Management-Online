const authService = require("../services/auth.service");

const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(404).json({
      message: "All input is required",
    });
  }

  const handleLogin = await authService.handleLogin(username, password);

  if (!handleLogin) {
    return res.status(404).json({
      message: "Invalid Credentials !",
    });
  }

  return res.status(200).json({
    message: "Login Successfully",
    handleLogin,
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

const home = async (req, res) => {
  res.status(200).send("Home Page");
};

module.exports = {
  register,
  login,
  logout,
  home,
};
