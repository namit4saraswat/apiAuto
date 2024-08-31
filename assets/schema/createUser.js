const joi = require('joi');


const createUser = joi.object({
    name: joi.string(),
    job: joi.string(),
    id: joi.string(),
    createdAt: joi.string()
    });

module.exports = createUser;