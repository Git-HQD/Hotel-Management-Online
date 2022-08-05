const express = require('express');
const userRouter = require('./users.router.js');
const authRouter = require('./auth.router.js');
const roomsRouter = require('./room.router');
const servicesRouter = require('./service.router')

const router = express.Router();

router.use("/users", userRouter);

router.use("/auth", authRouter);

router.use("/rooms", roomsRouter);

router.use("/services", servicesRouter);

module.exports = router;
