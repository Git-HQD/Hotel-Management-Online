const db = require('../models/index.model');

const getService = async() =>{
    return service = await db.Service.findAll();
};

const searchService = async(serviceId) =>{
    if( !service ){
        throw new Error({message: "Service not found"})
    }
    return service = await db.Service.findOne()
};