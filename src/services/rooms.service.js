const { Error } = require('sequelize');
const db = require('../models/index.model');

//Get all room follow id
const getRoom = async() =>{
    return room =  await db.Room.findAll();
};
//Get room follow req Date form custommer
const searchRoom = async ( roomId, startDate, endDate ) => {
    const room = await db.Room.findOne({
        where: { id : roomId }
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
        price: data.price,
        number_of_people: data.number_of_people 
    });
};

//update room
const updateRoom = async( roomId, data ) =>{
    const room = await searchRoom(roomId);
    //error If done found room in system 
    room.price = data.price;
    room.number_of_people = data.number_of_people
    await room.save(room);
    return room;
};

//Delete room
const deleteRoom = async( roomId,data )=>{
    const room = await searchRoom( roomId );
    await room.destroy( data );
}

module.exports = {
    getRoom,
    searchRoom,
    createRoom,
    updateRoom,
    deleteRoom
}