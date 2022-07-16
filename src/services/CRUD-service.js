import bcrypt from "bcryptjs";
import db from "../models/index-model.js";

const salt = bcrypt.genSaltSync(10);

const createNewUser = async (data) => {
  return new Promise(async (resolve, rejects) => {
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
      rejects(error);
    }
  });
};

const hashUserPwd = async (password) => {
  return new Promise(async (resolve, rejects) => {
    try {
      const hashPWD = await bcrypt.hashSync(password, salt);
      resolve(hashPWD);
    } catch (error) {
      rejects(error);
    }
  });
};

const getAllUser = () => {
  return new Promise(async (resolve, rejects) => {
    try {
      const users = db.users.findAll({
        raw: true,
      });
      resolve(users);
    } catch (error) {
      rejects(error);
    }
  });
};

module.exports = {
  createNewUser,
  getAllUser,
};
