const express = require('express');
const userRouter = require('./users.router.js');
const authRouter = require('./auth.router.js');
const forgotPwdRouter = require('./forgotPassword.router');

const router = express.Router();

router.use('/users', userRouter);

router.use('/auth', authRouter);

router.use('/forgotPwd', forgotPwdRouter);

module.exports = router;
