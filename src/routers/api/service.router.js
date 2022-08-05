const serviceController = require('../../controllers/service.controller');
const express = require('express');

const router = express.Router();

router.get('/', serviceController.getServices);

router.get('/search', serviceController.searchService);

router.post('/', serviceController.createService);

router.put('/:id', serviceController.updateService);

router.delete('/:id', serviceController.deleteService);

module.exports = router;
