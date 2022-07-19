import express from "express";
import homeController from "../controllers/web-controller.js";
import userController from "../controllers/user-controller";

const router = express.Router();

router.get("/", homeController.getHomePage);

router.get("/user", userController.readUser);

module.exports = router;
