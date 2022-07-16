import express from "express";
import homeController from "../controllers/home-controller.js";

const router = express.Router();

const initWebRouters = (app) => {
  router.get("/", homeController.getHomePage);
  router.get("/create", homeController.getCreateUser);

  router.post("/postUser", homeController.postUser);
  router.get("/getUser", homeController.getUser);

  return app.use("/", router);
};

module.exports = initWebRouters;
