const getUserList = require('../assets/schema/getUserList');
const getSingleUser = require('../assets/schema/getSingleUser');
const createUser = require('../assets/schema/createUser');
const createUserPayload = require("../assets/payload/createUser")

Feature('Testing reqRes').tag('@reqRes')

Scenario('Get user lists', async ({ I }) => {
    let resp = await I.sendGetRequest('/users?page=2')
    await I.seeResponseCodeIsSuccessful();
    await I.seeResponseContainsKeys(['page', 'data']);
    await I.seeResponseMatchesJsonSchema(getUserList);
})

Scenario('Get single user', async ({ I }) => {
    let resp = await I.sendGetRequest('/users/2')
    await I.seeResponseCodeIsSuccessful();
    await I.seeResponseContainsKeys(['data', 'support']);
    await I.seeResponseMatchesJsonSchema(getSingleUser);
})

Scenario('Create user', async ({ I }) => {
    let resp = await I.sendPostRequest('/users',createUserPayload)
    await I.seeResponseCodeIsSuccessful();
    await I.seeResponseContainsKeys(['name', 'job']);
    await I.seeResponseMatchesJsonSchema(createUser);
})
