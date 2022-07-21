const express  = require("express");
const userRouter = require("../api/users.router.js");

const router = express.Router();

router.use("/users", userRouter);

module.exports = router;
