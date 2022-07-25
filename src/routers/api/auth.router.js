const express = require("express");
const authController = require("../../controllers/auth.controller.js");
const authMMiddleware = require("../../middleware/verifyToken.middleware");
const router = express.Router();

router.get("/home", authMMiddleware, authController.home);

router.post("/login", authController.login);

router.get("/logout", authController.logout);

router.post("/register", authController.register);

module.exports = router;
