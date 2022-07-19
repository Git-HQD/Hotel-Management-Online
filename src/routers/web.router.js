import express from "express";
import homeController from "../controllers/home.controller";

const router = express.Router();

router.get("/", homeController.getHomePage);

router.get("/:id", homeController.readUser);

router.get("/createUser", homeController.getCreateUser);
router.post("/postUser", homeController.postUser);


router.get("/editUser", homeController.getEditUser);
router.post("/putUser", homeController.putUser);

router.get("/deleteUser", homeController.deleteUser);

module.exports = router;
