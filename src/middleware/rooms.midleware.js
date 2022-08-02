const{ body, validationResult } = require('express-validator');
const db = require('../models/rooms.model');

//Validation get room when customer input startdate and enddate
const notemtyDate = () => {
    return [
        body('startDate').notEmpty(),
        body('endDate').notEmpty(),
    ];
}

// const notemtyId = (roomID) =>{
//     return room('id').notEmpty();
// }

module.exports = {
    notemtyDate,
    // notemtyId
}
