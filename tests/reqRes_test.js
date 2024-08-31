Feature('Testing reqRes').tag('@reqRes')

Scenario('Get user lists', ({ I }) => {
    let resp = I.sendGetRequest('/users?page=2')
    I.seeResponseCodeIsSuccessful();
    I.seeResponseContainsKeys(['page', 'data']);
    I.seeResponseMatchesJsonSchema($ => {
        return $.object({
          data: $.array(),
          page: $.number(),
          total_pages: $.number(),
          per_page: $.number(),
          total: $.number(),
          support: $.object({
            text: $.string(),
            url: $.string()
          })
        })
    });
})
