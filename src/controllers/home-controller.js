import db from "../models/index-model.js";
import CRUDservice from "../services/CRUD-service";

const getHomePage = async (req, res) => {
  try {
    const data = await db.users.findAll();

    return res.render("homePage.ejs", {
      data: JSON.stringify(data),
    });
  } catch (error) {
    console.log(error);
  }
};

const getCreateUser = async (req, res) => {
  return res.render("create-user");
};

const postUser = async (req, res) => {
  const message = await CRUDservice.createNewUser(req.body);
  console.log(message);
  return res.send("Create User Successfully !");
};

const getUser = async (req, res) => {
  const data = await CRUDservice.getAllUser();
  console.log("--------------");
  console.log(data);
  console.log("--------------");
  return res.render("get-user.ejs", {
    dataTable: data,
  });
};

module.exports = {
  getHomePage,
  getCreateUser,
  postUser,
  getUser,
};
