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

const getLogin = async (req, res) => {
  return res.render("crud.ejs");
};

const postCRUD = async (req, res) => {
  const message = await CRUDservice.createNewUser(req.body);
  console.log(message);
  return res.send("post CRUD from server");
};

module.exports = {
  getHomePage,
  getLogin,
  postCRUD,
};
