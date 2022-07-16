import usersService from "../services/usersCRUD.service";

const getCreateUser = async (req, res) => {
  return res.render("create-user.ejs");
};

const postUser = async (req, res) => {
  const message = await usersService.createNewUser(req.body);
  console.log(message);
  return res.send("Create User Successfully !");
};

const getReadUser = async (req, res) => {
  const data = await usersService.getAllUser();

  return res.render("get-user.ejs", {
    dataTable: data,
  });
};

const getEditUser = async (req, res) => {
  const userId = req.query.id;
  console.log(userId);
  if (userId) {
    const userData = await usersService.getUserInfoById(userId);

    return res.render("edit-user.ejs", {
      userData,
    });
  } else {
    return res.send("User Not Found !");
  }
};

const putUser = async (req, res) => {
  const data = req.body;
  const allUsers = await usersService.updateUserData(data);
  return res.render("get-user.ejs", {
    dataTable: allUsers,
  });
};

module.exports = {
  getCreateUser,
  postUser,
  getReadUser,
  getEditUser,
  putUser,
};
