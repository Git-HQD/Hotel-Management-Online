import usersService from "../services/usersCRUD-service.js";

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

const deleteUser = async (req, res) => {
  const id = req.query.id;
  if (id) {
    await usersService.deleteUserById(id);
    return res.send("Delete The User Successfully !");
  } else {
    return res.send("User Not Found");
  }
};

module.exports = {
  getCreateUser,
  postUser,
  getReadUser,
  getEditUser,
  putUser,
  deleteUser,
};
