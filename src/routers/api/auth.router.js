const express = require('express');
const authController = require('../../controllers/auth.controller.js');
const authMiddleware = require('../../middleware/auth.middleware');

const router = express.Router();

router.post('/register', authMiddleware.verifyJSONRigister, authController.register);

router.post('/login', authMiddleware.verifyJSONLogin, authController.login);

router.put('/changePassword', authController.changePassword);

module.exports = router;
