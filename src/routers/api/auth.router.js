const express = require('express');
const authController = require('../../controllers/auth.controller.js');
const verifyMiddleware = require('../../middleware/verifyToken.middleware');

const router = express.Router();

router.post('/register', authController.register);

router.get('/home', verifyMiddleware, authController.home);

router.post('/login', authController.login);

router.post('/logout', authController.logout);

module.exports = router;
