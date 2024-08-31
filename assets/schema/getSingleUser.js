const joi = require('joi');


const getSingleUser = joi.object({
    data: joi.object({
        id: joi.number(),
        email: joi.string(),
        first_name: joi.string(),
        last_name: joi.string(),
        avatar: joi.string()
    }),
    support: joi.object({
        text: joi.string(),
        url: joi.string()
    })
    });

module.exports = getSingleUser;