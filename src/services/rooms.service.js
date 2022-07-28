const { Error } = require('sequelize');
const db = require('../models/index.model');

//Get all room follow id
const getRoom = async() =>{
    const room = await db.rooms.findAll();
    return room;
};
//Get room follow req Date form custommer
const searchRoom = async ( roomId, startDate, endDate ) => {
    const room = await db.rooms.findOne({
        where: { id : roomId}
    });
    //Error if customer accept startdate or enddate
    if(!startDate || !endDate) {
        throw new Error("Room not Found");
    }
    return room;
}

module.exports = {
    getRoom,
    searchRoom
}