const { Error } = require('sequelize');
const db = require('../models/index.model');

//Get all room follow id
const getroom = async() =>{
    const room = await db.rooms.findAll();
    return room;
};
//Get room follow req Date form custommer
const search = async() => {
    const startDate = req.body;
    const endDate = req.body;
    if(!startDate || !endDate ){
        throw new Error('Not Date To Find Room') ;  
    }
    return db.rooms;
};

module.exports = {
    getroom,
    search
}