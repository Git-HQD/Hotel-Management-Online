const db = require('../models/dbconnect.model');
const DB_rooms = require('../models/rooms.model');

//Get all room follow id
const getroom = async() =>{
    const rooms = await DB_rooms.findAll({
        id
    });
    return rooms;
};
//Get room follow req Date form custommer
const search = async(req,res,err) => {
    const startDate = req.body;
    const endDate = req.body;
    if(!startDate || !endDate ){
        throw(err);  
    }
    return DB_rooms.rooms;
};

module.exports = {
    getroom,
    search
}