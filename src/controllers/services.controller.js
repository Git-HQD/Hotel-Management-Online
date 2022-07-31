const serviceService = require('../services/services.service');

const getService = async(req, res) =>{
    const service = await serviceService.getService();

    res.status(200).json( service )
};

const searchService = async(req, res) =>{
    const { id: serviceId } = req.params;
    const service = await serviceService.searchService(id);

    res.status(200).json( service, {message: "Found Service"})
};

const createService = async(req, res) =>{
    const data = req.body;
    const service = await serviceService.createService(data);

    res.status(201).json( service, {message: "Create Succesfull!"} )
};

const updateService = async(req, res) =>{
    const id = req.params.id;
    const data = req.body;
    const service = await serviceService.updateService(id, data);

    res.status(202).json(service, {message: "Update Succesfull!"})
};

const deleteService = async(req, res) =>{
    const id = req.params.id;
    const service = await serviceService.deleteService(id);

    res.status(202).json(service, {message: "Delete Succesfull!"})
};

module.exports = {
    getService,
    searchService,
    createService,
    updateService,
    deleteService
}