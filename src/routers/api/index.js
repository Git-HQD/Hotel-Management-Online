import express from "express";
import userRouter from "../api/users.router.js";

const router = express.Router();

router.use("/users", userRouter);

module.exports = router;
