import userService from "../services/user-service.js";

const readUser = async (req, res) => {
  return res.render("homePage.ejs");
};

const getCreateUser = async (req, res) => {
  return res.render("create-user.ejs");
};

const postUser = async (req, res) => {
  await userService.createNewUser(req.body);
  return res.render("homePage.ejs");
};

const getReadUser = async (req, res) => {
  const data = await userService.getAllUser();
  return res.render("get-user.ejs", {
    dataTable: data,
  });
};

const getEditUser = async (req, res) => {
  const id = req.query.id;
  if (!id) {
    return res.send("User Not Found !");
  } else {
    const userData = await userService.getUserInfoById(id);
    res.render("edit-user.ejs", {
      userData,
    });
  }
};

const putUser = async (req, res) => {
  const data = req.body;
  const allUsers = await userService.updateUserData(data);
  return res.render("get-user.ejs", {
    dataTable: allUsers,
  });
};

const deleteUser = async (req, res) => {
  const id = req.query.id;
  if (!id) {
    return res.send("User Not Found");
  } else {
    const allUsers = await userService.deleteUserById(id);
    return res.render("get-user.ejs", {
      dataTable: allUsers,
    });
  }
};

module.exports = {
  readUser,
  getCreateUser,
  postUser,
  getReadUser,
  getEditUser,
  putUser,
  deleteUser,
};
