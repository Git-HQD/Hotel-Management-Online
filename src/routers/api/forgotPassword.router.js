const express = require('express');
const forgotPwdController = require('../../controllers/forgotPassword.controller');

const router = express.Router();

router.post('/', forgotPwdController.forgotPassword);

router.put('/:id', forgotPwdController.resetPassword);

module.exports = router;
