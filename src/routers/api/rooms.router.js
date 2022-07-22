const express = require("express");
const roomController = require('../../controllers/rooms.controllers');
const { notemtyDate } = require('../../middleware/rooms.midleware');

const router = express.Router();

router.get('/',roomController);

router.get('/search', notemtyDate, roomController.search)

module.exports = router;