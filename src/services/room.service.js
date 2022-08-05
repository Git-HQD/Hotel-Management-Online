const { Error } = require('sequelize');
const db = require('../models/index.model');

//Get all room
const getRooms = async() =>{
    return rooms =  await db.Room.findAll();
};
//Get room follow req Date form custommer
const searchRoom = async ( id) => {
    const room = await db.Room.findOne({
        where: { id }
    });
    //Error if customer accept startdate or enddate
    if(!room) {
        throw new Error("Room not found");
    }
    return room;
};

//Create room
const createRoom = async ( data ) =>{
    return await db.Room.create({ 
        room_type_id: data.room_type_id,
        price: data.price,
        number_of_people: data.number_of_people 
    });
};

//update room
const updateRoom = async( id, data ) =>{
    const room = await searchRoom(id);
    //error If done found room in system
    room.room_type_id = data.room_type_id; 
    room.price = data.price;
    room.number_of_people = data.number_of_people;
    await room.save();
    return room;
};

//Delete room
const deleteRoom = async( id )=>{
    const room = await searchRoom( id );
    await room.destroy();
}

module.exports = {
    getRooms,
    searchRoom,
    createRoom,
    updateRoom,
    deleteRoom
}