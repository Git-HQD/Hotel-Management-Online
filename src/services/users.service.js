import db from "../models/index.model";
import bcrypt from "bcryptjs";

const SALT = bcrypt.genSaltSync(10);

const hashPassword = async(password) => {
  return bcrypt.hashSync(password, SALT);
}; 

const getAll = async() => {
  const users = await db.users.findAll();

  return users;
}

const getUserById = async(userId) => {
  const user = await db.users.findOne({
    where: {id: userId}
  });

  if(!user) {
    throw new Error("User Not Found");
  }

  return user;
};

const createService = async(data) => {
  const hashPwdBcrypt = await hashPassword(data.password);
    return db.users.create({
      username: data.username,
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      password: hashPwdBcrypt,
      address: data.address,
      phone: data.phone,
      iam_role: data.iam_role
    });
}

const updateService = async(data) => {
  const user = await getUserById();

  if(!user) {
    throw new Error("User Not Found");
  }
  
  user.first_name = data.first_name,
  user.last_name = data.last_name,
  user.address = data.address

  await user.save();
  
};

const deleteService = async(data) => {
  const user = await db.users.findOne(data);

  return user.destroy();
};

export default {
  getAll,
  getUserById,
  createService,
  hashPassword,
  updateService,
  deleteService,
};