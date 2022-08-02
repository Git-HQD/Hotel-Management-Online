const db = require('../models/index.model');

const getService = async() =>{
    return service = await db.Service.findAll();
};

const searchService = async(serviceId) =>{
    const service = await db.Service.findOne({
        where:{
            id: serviceId
        }
    })
    if( !service ){
        throw new Error({message: "Service not found"})
    }
    return service
};

const createService = async(data) =>{
    const service = await db.Service.create({
        name: data.name,
        price: data.price
    });
    return service
};

const updateService = async( serviceId, data ) =>{
    const service = await searchService(serviceId);
    service.name = data.name;
    service.price = data.price;
    await service.save(service);
    return service
}

const deleteService = async( serviceId, data) =>{
    const service = await searchService(serviceId);
    await service.destroy(data);
}
module.exports = {
    getService,
    searchService,
    createService,
    updateService,
    deleteService
}
