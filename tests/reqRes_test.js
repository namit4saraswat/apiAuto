const getUserList = require('../assets/schema/getUserList');

Feature('Testing reqRes').tag('@reqRes')

Scenario('Get user lists', ({ I }) => {
    let resp = I.sendGetRequest('/users?page=2')
    I.seeResponseCodeIsSuccessful();
    I.seeResponseContainsKeys(['page', 'data']);
    I.seeResponseMatchesJsonSchema(getUserList);
})
