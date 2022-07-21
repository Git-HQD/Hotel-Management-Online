const userService = require("../services/users.service");

const getUsers = async(req, res) => {
  const users = await userService.getAll();

  res.status(200).json(users);
};

const get = async(req, res) => {
  const {id: userId} = req.params;
  const user = await userService.getUserById(userId);

  res.status(200).json(user)
};

const create = async(req, res) => {
  const data = req.body;
  const user = await userService.createService(data);

  res.status(201).json(user);
};

const update = async(req, res) => {
  const id = req.params.id;
  const data = req.body;
  const user = await userService.updateService(id, data);

  res.status(200).json(user);
}

const deLete = async(req, res) => {
  const id = req.params.id;
  const data = req.body;
  const user = await userService.deleteService(id, data);

  res.status(200).json(user);
};

module.exports = {
  getUsers,
  get,
  create,
  update,
  deLete,
};
