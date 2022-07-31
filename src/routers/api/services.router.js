const bodyParser = require('body-parser');
const serviceController = require('../../controllers/services.controller');
const express = require('express');

const router = express.Router();
const bodyJson = bodyParser.json();

router.get('/', bodyJson, serviceController);

router.post('/', bodyJson, serviceController);

router.put('/:id', bodyJson, serviceController);

router.delete('/:id', bodyJson, serviceController);

module.exports = router;
