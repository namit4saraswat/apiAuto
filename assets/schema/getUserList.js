const joi = require('joi');


const getUserList = joi.object({
    data: joi.array().items({
        id: joi.number(),
        email: joi.string(),
        first_name: joi.string(),
        last_name: joi.string(),
        avatar: joi.string()
    }),
    page: joi.number(),
    total_pages: joi.number(),
    per_page: joi.number(),
    total: joi.number(),
    support: joi.object({
        text: joi.string(),
        url: joi.string()
    })
    }).unknown();

module.exports = getUserList;