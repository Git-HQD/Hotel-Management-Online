import db from "../models/index-model.js";
import bcrypt from "bcryptjs";

const SALT = bcrypt.genSaltSync(10);

// Create New User
const createNewUser = async (data) => {
  const hashPwdBcrypt = await hashUserPwd(data.password);
  return db.users.create({
    firstName: data.firstName,
    lastName: data.lastName,
    idcard: data.idcard,
    email: data.email,
    password: hashPwdBcrypt,
    address: data.address,
    phone: data.phone,
  });
};

// Hash Password
const hashUserPwd = async (password) => {
  return bcrypt.hashSync(password, SALT);
};

// Get All Users
const getAllUser = async () => {
  return db.users.findAll({
    raw: true,
  });
};

// Get User Info By ID
const getUserInfoById = async (id) => {
  return db.users.findOne({
    where: { id: id },
    raw: true,
  });
};

// Update users
const updateUserData = async (data) => {
  const user = await db.users.findOne({
    where: { id: data.id },
  });
  if (!user) {
    throw new Error("User Not Found");
  }
  user.firstName = data.firstName;
  user.lastName = data.lastName;
  user.email = data.email;
  user.address = data.address;

  await user.save();

  return await db.users.findAll();
};

const deleteUserById = async (id) => {
  const user = await db.users.findOne({
    where: { id: id },
  });

  if (!user) {
    throw new Error("User Not Found");
  }

  await user.destroy();

  return await db.users.findAll();
};

module.exports = {
  createNewUser,
  getAllUser,
  getUserInfoById,
  updateUserData,
  deleteUserById,
};
