import db from "../models/index.model";
import userService from "../services/users.service";

const readUser = async(req, res) => {
  const users = await db.users.findAll();

  return res.status(200).json(users);
};

const createUser = async(req, res) => {
  await userService.createNewUser(req.body);

  return res.status(201).json({
    message: "Create User Successful !"
  })
};

const updateUser = async(req, res) => {
  return res.status(200).json({
    message: "ok"
  })
};

const deleteUser = async(req, res) => {
  return res.status(200).json({
    message: "ok"
  })
};


module.exports = {
  readUser,
  createUser,
  updateUser,
  deleteUser,
};
