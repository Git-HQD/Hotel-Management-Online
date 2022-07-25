const express = require('express');
const userRouter = require('./users.router.js');
const authRouter = require('./auth.router.js');

const router = express.Router();

router.use('/users', userRouter);

router.use('/auth', authRouter);

module.exports = router;
