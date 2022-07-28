const roomsService = require ( "../services/");
const bodyParser = require('body-parser');
const roomsService = require('../services/rooms.service');

const bodyJson = bodyParser.json();

const getRooms = async(req,res)=>{
   const room = await roomsService.getRoom();

   res.status(200).json(room);
}

const search = async (req, res) => {
   const room = await roomsService.search();

   res.status(200).json(room);

}

const deleteRoom = async()=>{

}
module.exports = {
   search,
   getRooms
};


