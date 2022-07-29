const bodyParser = require('body-parser');
const express = require("express");
const roomController = require('../../controllers/rooms.controllers');
const { notemtyDate, notemtyId } = require('../../middleware/rooms.midleware');

const router = express.Router();
const bodyJson = bodyParser.json()

router.get('/', bodyJson, roomController.getRoom);

router.get('/:id', bodyJson, notemtyDate, notemtyId, roomController.searchRoom);

router.post('/', bodyJson, roomController.createRoom);

router.put('/:id', bodyJson, notemtyId, roomController.updateRoom);

router.delete('/:id', bodyJson, notemtyId, roomController.deleteRoom);

module.exports = router;
