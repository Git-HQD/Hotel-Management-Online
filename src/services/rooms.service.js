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
    if(!startDate || !endDate) {
        throw new Error({ message: "Room not Found"});
    }
    return room;
};

//Create room
const createRoom = async ( data ) =>{
    const newRoom = new db.create({ price, number_of_people });
    await newRoom.save( data );
    
    return newRoom;
};

//update room
const updateRoom = async( roomId ) =>{
    const room = await searchRoom( roomId );
    
    //error If done found room in system 
    if ( !room ){
        throw new Error({ message: "Your room is wrong" })
    }
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