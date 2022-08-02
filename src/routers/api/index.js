const express = require('express');
const userRouter = require('./users.router.js');
const authRouter = require('./auth.router.js');
const roomRouter = require('./rooms.router');
const serviceRouter = require('./services.router')

const router = express.Router();

router.use("/users", userRouter);

router.use("/auth", authRouter);

router.use("/room", roomRouter);

router.use("/service", serviceRouter);

module.exports = router;
