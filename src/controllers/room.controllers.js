const roomService = require('../services/room.service');

//Get all room in Hotel
const getRooms = async( req, res )=>{
   const rooms = await roomService.getRooms();

   res.status(200).json( rooms );
}

// Find one room in Hotel
const searchRoom = async ( req, res ) => {
   const id = req.params.id;
   const room = await roomService.searchRoom( id );
   
   res.status(200).json( room );
}

//Create room
const createRoom = async( req, res ) =>{
   const data = req.body;
   const room = await roomService.createRoom( data );
   
   res.status(201).json( room );
}

//Update room 
const updateRoom = async( req, res ) =>{
   const id = req.params.id;
   const data = req.body;
   const room = await roomService.updateRoom( id, data );
   
   res.status(200).json( room )
}

//Delete Room
const deleteRoom = async( req, res )=>{
   const id = req.params.id;
   const room = await roomService.deleteRoom( id );

   res.status(200).json( room )
}
module.exports = {
   getRooms,
   searchRoom,
   createRoom,
   updateRoom,
   deleteRoom
};
