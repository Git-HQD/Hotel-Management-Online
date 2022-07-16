import express from "express";
import homeController from "../controllers/home-controller.js";

const router = express.Router();

const initWebRouters = (app) => {
  router.get("/", homeController.getHomePage);
  router.get("/login", homeController.getLogin);

  router.post("/post-crud", homeController.postCRUD);

  return app.use("/", router);
};

module.exports = initWebRouters;
