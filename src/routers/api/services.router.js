const bodyParser = require('body-parser');
const serviceController = require('../../controllers/services.controller');
const express = require('express');

const router = express.Router();
const bodyJson = bodyParser.json();

router.get('/', bodyJson, serviceController.getService);

router.get('/:id', bodyJson, serviceController.searchService);

router.post('/', bodyJson, serviceController.createService);

router.put('/:id', bodyJson, serviceController.updateService);

router.delete('/:id', bodyJson, serviceController.deleteService);

module.exports = router;
