import express from "express";
import userController from "../../controllers/user-controller.js";

const router = express.Router();

router.get("/createUser", userController.getCreateUser);
router.post("/postUser", userController.postUser);

router.get("/getUser", userController.getReadUser);

router.get("/editUser", userController.getEditUser);
router.post("/putUser", userController.putUser);

router.get("/deleteUser", userController.deleteUser);

module.exports = router;
