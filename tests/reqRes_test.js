const getUserList = require('../assets/schema/getUserList');
const getSingleUser = require('../assets/schema/getSingleUser');
const createUser = require('../assets/schema/createUser');
const updateUser = require('../assets/schema/updateUser');
const createUserPayload = require("../assets/payload/createUser")
const updateUserPayload = require("../assets/payload/updateUser")
const { expect, assert } = require('chai');

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
    await I.seeResponseValidByCallback(({ data, status, expect }) => {
       expect(data.name.length).to.be.gte(10);
       expect(status).to.equal(201)
      })
      
})

Scenario('Update user', async ({ I }) => {
    let resp = await I.sendPutRequest('/users/2',updateUserPayload)
    await I.seeResponseCodeIsSuccessful();
    await I.seeResponseContainsKeys(['name', 'job', 'updatedAt']);
    await I.seeResponseMatchesJsonSchema(updateUser);
})

Scenario('Delete user', async ({ I }) => {
    let resp = await I.sendDeleteRequest('/users/2')
    await I.seeResponseCodeIsSuccessful();
})