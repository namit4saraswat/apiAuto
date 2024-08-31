const joi = require('joi');


const updateUser = joi.object({
    name: joi.string(),
    job: joi.string(),
    updatedAt: joi.string()
    });

module.exports = updateUser;