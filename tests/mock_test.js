const  mock  = require('../mock/mockApis');
const { faker } = require('@faker-js/faker');

Feature('Testing reqRes').tag('@mock')

Scenario('Get product lists', async ({ I }) => {
    mock.getProduct()
    let resp = await I.sendGetRequest('/products')
    await I.seeResponseCodeIsSuccessful();
    await I.seeResponseContainsKeys(['a', 'b']);
})