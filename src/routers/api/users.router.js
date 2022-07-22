const express = require("express");
const userController = require("../../controllers/user.controller.js");

const router = express.Router();

router.get("/", userController.getAll);

router.post("/", userController.create);

router.get("/:id", userController.getUser);

router.put("/:id", userController.update);

router.delete("/:id", userController.deLete);

module.exports = router;
