// import db from "../models/index.model.js";
// import homeService from "../services/home.service.js";



// const getHomePage = async (req, res) => {
//   const data = await db.users.findAll();

//    res.render("homePage.ejs", {
//       data: JSON.stringify(data),
//     });
// };

// const createUser = async (req, res) => {

//   res.render("create-user.ejs");
  
// };

// const postUser = async (req, res) => {
//   await homeService.createNewUser(req.body);
  
//   res.render("homePage.ejs");
// };


// const editUser = async (req, res) => {
//   const id = req.query.id;
//   const userData = await homeService.getUserInfoById(id);
  
//   res.render("edit-user.ejs", 
//     {
//       userData,
//     });
// };

// const putUser = async (req, res) => {
//   const data = req.body;
//   const user = await homeService.updateUserData(data);
  
//   return res.render("get-user.ejs", 
//     {
//       dataTable: user,
//     });
// };

// const deleteUser = async (req, res) => {
//   const id = req.query.id;
//   if (id) 
//     {
//       const user = await homeService.deleteUserById(id);
      
//       return res.render("get-user.ejs", 
//         {
//           dataTable: user,
//         });
//     } 
// };

// module.exports = {
//   getHomePage,
//   createUser,
//   postUser,
//   editUser,
//   putUser,
//   deleteUser,
// };
