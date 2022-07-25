const authService = require("../services/auth.service");
const { registerValidator } = require("../validations/auth.validations");

// register
const register = async (req, res) => {
  const { error } = await registerValidator(req.body);

  if (error) return res.status(422).send(error.details[0].message);

  const data = req.body;

  const register = await authService.register(data);

  res.status(201).json({
    register,
    message: "Register Successfully !",
  });
};

// login
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

// logout
const logout = async (req, res) => {
  res.status(200).json({
    message: "Logout Successfully !",
  });
};

// home
const home = async (req, res) => {
  res.status(200).send("Home Page");
};

module.exports = {
  register,
  login,
  logout,
  home,
};
