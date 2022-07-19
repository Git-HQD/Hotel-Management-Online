import express from "express";
import userController from "../../controllers/user.controller.js";

const router = express.Router();

router.get("/", userController.readUser);

router.post("/create-user", userController.createUser);

router.put("/update-user/:id", userController.updateUser);

router.delete("/delete-user/:id", userController.deleteUser);

module.exports = router;
