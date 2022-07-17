import express from "express";
import homeController from "../controllers/web-controller.js";
import usersController from "../controllers/usersCRUD-controller";

const router = express.Router();

const initWebRouters = (app) => {
  router.get("/", homeController.getHomePage);

  router.get("/createUser", usersController.getCreateUser);
  router.post("/postUser", usersController.postUser);

  router.get("/getUser", usersController.getReadUser);

  router.get("/editUser", usersController.getEditUser);
  router.post("/putUser", usersController.putUser);

  router.get("/deleteUser", usersController.deleteUser);

  return app.use("/", router);
};

module.exports = initWebRouters;
