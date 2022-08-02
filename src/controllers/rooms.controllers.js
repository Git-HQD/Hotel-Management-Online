const roomsService = require('../services/rooms.service');

//Get all room in Hotel
const getRoom = async( req, res )=>{
   const room = await roomsService.getRoom();

   res.status(200).json( room );
}

// Find one room in Hotel
const searchRoom = async ( req, res ) => {
   const { id:  roomId } = req.params;
   const startDate = req.body;
   const endDate = req.body;
   const room = await roomsService.searchRoom( roomId );
   
   res.status(200).json( room );
}

//Create room
const createRoom = async( req, res ) =>{
   const data = req.body;
   const room = await roomsService.createRoom( data );
   
   res.status(201).json( room );
}

//Update room 
const updateRoom = async( req, res ) =>{
   const id = req.params.id;
   const data = req.body;
   const room = await roomsService.updateRoom( id, data );
   
   res.status(200).json( room )
}

//Delete Room
const deleteRoom = async( req, res )=>{
   const id = req.params.id;
   const data = req.body;
   const room = await roomsService.deleteRoom( id, data );

   res.status(200).json( room )
}
module.exports = {
   getRoom,
   searchRoom,
   createRoom,
   updateRoom,
   deleteRoom
};


