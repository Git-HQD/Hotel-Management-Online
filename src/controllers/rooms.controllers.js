const roomsService = require ( "../services/");
const bodyParser = require('body-parser');
const roomsModel = require('../models/rooms.model');
const roomsService = require('../services/rooms.service');

const bodyJson = bodyParser.json();

const getRooms = async(req,res)=>{
   const rooms = await roomsService.getRoom();

   res.status(200).json(rooms);
}

const search = async (req, res) => {
   const rooms = 

   res.status(200).json(rooms);

}

module.exports = {
   search,
   getRooms
};


