const serviceController = require('../../controllers/services.controller');
const express = require('express');

const router = express.Router();

router.get('/', serviceController.getService);

router.get('/:id', serviceController.searchService);

router.post('/', serviceController.createService);

router.put('/:id', serviceController.updateService);

router.delete('/:id', serviceController.deleteService);

module.exports = router;
