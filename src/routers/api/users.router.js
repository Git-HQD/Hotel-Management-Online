const express = require("express");
const userController = require("../../controllers/user.controller.js");

const router = express.Router();

router.get("/", userController.getAll);

router.post("/", userController.createUser);

router.get("/:id", userController.getUser);

router.put("/:id", userController.updateUser);

router.delete("/:id", userController.deleteUser);

module.exports = router;
