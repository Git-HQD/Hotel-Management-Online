const serviceService = require('../services/service.service');

const getServices = async(req, res) =>{
    const services = await serviceService.getServices();

    res.status(200).json( services )
};

const searchService = async(req, res) =>{
    const name= req.body;
    const services = await serviceService.searchService(name.name);

    res.status(200).json( services )
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
    const service = await serviceService.deleteService( id );

    res.status(202).json( service )
};

module.exports = {
    getServices,
    searchService,
    createService,
    updateService,
    deleteService
}