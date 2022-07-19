import db from "../models/index.model";
import bcrypt from "bcryptjs";

const SALT = bcrypt.genSaltSync(10);

const createNewUser = async (data) => {
  const hashPwdBcrypt = await hashUserPwd(data.password);
  return db.users.create({
    user_name: data.user_name,
    first_name: data.first_name,
    last_name: data.last_name,
    email: data.email,
    password: hashPwdBcrypt,
    address: data.address,
    phone: data.phone,
  });
};

const hashUserPwd = async (password) => {
  return bcrypt.hashSync(password, SALT);
};


module.exports = {
  createNewUser,
};