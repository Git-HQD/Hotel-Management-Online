const authService = require('../services/auth.service');
const { registerValidator } = require('../middleware/register.middleware');

const register = async (req, res) => {
  const { error } = await registerValidator(req.body);

  if (error) return res.status(422).send(error.details[0].message);

  const data = req.body;

  if (!data) {
    res.status(400).send('All input is required');
  }

  const register = await authService.register(data);

  return res.status(201).json({
    register,
    message: 'Register Successfully',
  });
};

const home = async (req, res) => {
  return res.status(200).send('Home Page');
};

const login = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(422).json({
      message: 'Username or Password is not correct',
    });
  }

  const login = await authService.login(username, password);

  return res.status(200).json({
    message: 'Login Successfully',
    login,
  });
};

const logout = async (req, res) => {
  
  return res.status(200).json({
    token,
    message: 'Logout Successfully',
  });
};


module.exports = {
  register,
  login,
  logout,
  home,
};
