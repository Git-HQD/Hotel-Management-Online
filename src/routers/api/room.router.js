const bodyParser = require('body-parser');
const express = require('express');
const roomController = require('../../controllers/room.controllers');
const { notemtyDate, notemtyId } = require('../../middleware/rooms.midleware');

const router = express.Router();

router.get('/', roomController.getRooms);

router.get('/:id', roomController.searchRoom);

router.post('/', roomController.createRoom);

router.put('/:id', roomController.updateRoom);

router.delete('/:id', roomController.deleteRoom);

module.exports = router;
