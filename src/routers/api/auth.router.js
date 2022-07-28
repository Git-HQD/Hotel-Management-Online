const express = require('express');
const authController = require('../../controllers/auth.controller.js');
const checkInput = require('../../middleware/checkInput.middleware');

const router = express.Router();

router.post('/register', checkInput, authController.register);

router.post('/login', authController.login);

router.post('/logout', authController.logout);

module.exports = router;
