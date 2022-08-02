const serviceService = require('../services/services.service');

const getService = async(req, res) =>{
    const service = await serviceService.getService();

    res.status(200).json( service )
};

const searchService = async(req, res) =>{
    const { id: serviceId } = req.params;
    const service = await serviceService.searchService( serviceId );

    res.status(200).json( service)
};

const createService = async(req, res) =>{
    const data = req.body;
    const service = await serviceService.createService( data );

    res.status(201).json( service )
};

const updateService = async(req, res) =>{
    const id = req.params.id;
    const data = req.body;
    const service = await serviceService.updateService( id, data );

    res.status(202).json( service )
};

const deleteService = async(req, res) =>{
    const id = req.params.id;
    const service = await serviceService.deleteService( id, data);

    res.status(202).json( service )
};

module.exports = {
    getService,
    searchService,
    createService,
    updateService,
    deleteService
}