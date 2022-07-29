const express = require('express');
const authController = require('../../controllers/auth.controller.js');
const checkReqRigister = require('../../middleware/checkReqRigister.middleware');
const checkReqLogin = require('../../middleware/checkReqLogin.middleware');

const router = express.Router();

router.post('/register', checkReqRigister, authController.register);

router.post('/login', checkReqLogin, authController.login);

module.exports = router;
