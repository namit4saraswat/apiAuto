const { faker } = require('@faker-js/faker');

const updateUserPayload = {
    "name" : faker.person.fullName(),
    "job" : faker.person.jobTitle()
}

module.exports = updateUserPayload;