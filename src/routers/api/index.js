import express from "express";
import userRouter from "../api/users.router.js";

const router = express.Router();

router.use("/user", userRouter);

module.exports = router;
