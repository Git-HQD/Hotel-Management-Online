const{ body, validationResult } = require('express-validator');


const notemtyDate = () => {
    return [
        body('startDate').notEmpty(),
        body('endDate').notEmpty(),
    ];
}

module.exports = {
    notemtyDate,
}

