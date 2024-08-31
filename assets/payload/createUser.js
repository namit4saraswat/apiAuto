const { faker } = require('@faker-js/faker');

const createUserPayload = {
    "name" : faker.person.fullName(),
    "job" : faker.person.jobTitle()
}

module.exports = createUserPayload;