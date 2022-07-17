import db from "../models/index-model.js";
import bcrypt from "bcryptjs";

const salt = bcrypt.genSaltSync(10);

// Create New User
const createNewUser = async (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const hashPwdBcrypt = await hashUserPwd(data.password);
      await db.users.create({
        firstName: data.firstName,
        lastName: data.lastName,
        idcard: data.idcard,
        email: data.email,
        password: hashPwdBcrypt,
        address: data.address,
        phone: data.phone,
        roleID: data.roleID,
      });
      resolve("Create User Successfully !");
    } catch (error) {
      reject(error);
    }
  });
};

// Hash Password
const hashUserPwd = async (password) => {
  return new Promise(async (resolve, reject) => {
    try {
      const hashPWD = await bcrypt.hashSync(password, salt);
      resolve(hashPWD);
    } catch (error) {
      reject(error);
    }
  });
};

// Get All Users
const getAllUser = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const users = db.users.findAll({
        raw: true,
      });
      resolve(users);
    } catch (error) {
      reject(error);
    }
  });
};

// Get User Info By ID
const getUserInfoById = (userId) => {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await db.users.findOne({
        where: { id: userId },
        raw: true,
      });
      if (user) {
        resolve(user);
      } else {
        [];
      }
    } catch (error) {
      reject(error);
    }
  });
};

// Update users
const updateUserData = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await db.users.findOne({
        where: { id: data.id },
      });
      if (user) {
        user.firstName = data.firstName;
        user.lastName = data.lastName;
        user.email = data.email;
        user.address = data.address;

        await user.save();

        const allUsers = await db.users.findAll();
        resolve(allUsers);
      } else {
        resolve();
      }
    } catch (error) {
      reject(error);
    }
  });
};

const deleteUserById = (id) => {
  return new Promise(async (resovle, reject) => {
    try {
      const user = await db.users.findOne({
        where: { id: id },
      });
      if (user) {
        await user.destroy();
      }

      resovle();
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  createNewUser,
  getAllUser,
  getUserInfoById,
  updateUserData,
  deleteUserById,
};
