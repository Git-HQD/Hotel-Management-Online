const userService = require("../services/users.service");

const getAll = async (req, res) => {
  const users = await userService.getAll();

  res.status(200).json(users);
};

const getUser = async (req, res) => {
  const { id: userId } = req.params;

  const user = await userService.getUser(userId);

  res.status(200).json(user);
};

const create = async (req, res) => {
  const data = req.body;

  const user = await userService.create(data);

  res.status(201).json(user);
};

const update = async (req, res) => {
  const id = req.params.id;
  const data = req.body;

  const user = await userService.update(id, data);

  res.status(200).json(user);
};

const deLete = async (req, res) => {
  const id = req.params.id;
  const data = req.body;

  const user = await userService.deLete(id, data);

  res.status(204).json();
};

module.exports = {
  getAll,
  getUser,
  create,
  update,
  deLete,
};
