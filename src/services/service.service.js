const db = require('../models/index.model');
const {Op} = require('sequelize');

const getServices = async() =>{
    return services = await db.Service.findAll();
};

const searchService = async(name) =>{
    const service = await db.Service.findAll({
        where:{
            name: {
                [Op.like]: `%${name}%`
            }
        },
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

const updateService = async( id, data ) =>{
    const service = await searchService(id);
    service.name = data.name;
    service.price = data.price;
    await service.save();
    return service
}

const deleteService = async( id ) =>{
    const service = await searchService( id );
    await service.destroy();
}
module.exports = {
    getServices,
    searchService,
    createService,
    updateService,
    deleteService
}
