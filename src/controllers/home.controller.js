import db from "../models/index.model.js";
import homeService from "../services/home.service.js";



const getHomePage = async (req, res) => {
  const data = await db.users.findAll();

  return res.render("homePage.ejs", {
      data: JSON.stringify(data),
    });
};

const getReadUser = async (req, res) => {
  const data = await homeService.getAllUser();
  
  return res.render("get-user.ejs", {
      dataTable: data,
    });
};

const readUser = async (req, res) => {

  return res.render("homePage.ejs");

};

const getCreateUser = async (req, res) => {

  return res.render("create-user.ejs");

};

const postUser = async (req, res) => {
  await homeService.createNewUser(req.body);
  
  return res.render("homePage.ejs");
};


const getEditUser = async (req, res) => {
  const id = req.query.id;
  const userData = await homeService.getUserInfoById(id);
  
  return res.render("edit-user.ejs", 
    {
      userData,
    });
};

const putUser = async (req, res) => {
  const data = req.body;
  const user = await homeService.updateUserData(data);
  
  return res.render("get-user.ejs", 
    {
      dataTable: user,
    });
};

const deleteUser = async (req, res) => {
  const id = req.query.id;
  if (id) 
    {
      const user = await homeService.deleteUserById(id);
      
      return res.render("get-user.ejs", 
        {
          dataTable: user,
        });
    } 
};

module.exports = {
  getHomePage,
  readUser,
  getCreateUser,
  postUser,
  getReadUser,
  getEditUser,
  putUser,
  deleteUser,
};
