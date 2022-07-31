const express = require('express');
const pageController = require('../../controllers/page.controller');
const verifyMiddleware = require('../../middleware/verifyToken.middleware');

const router = express.Router();

router.get('/Page', verifyMiddleware, pageController.homePage);

module.exports = router;
