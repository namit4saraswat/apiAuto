const nock = require('nock');
const { faker } = require('@faker-js/faker');

module.exports = {
getProduct: () => {
  nock('https://reqres.in/api')
    .get('/products')
    .reply(200, [
      { 'a': Math.floor(Math.random() * 1000), 'b': 'Daal' },
      { 'a': Math.floor(Math.random() * 1000), 'b': 'Cheeni' },
    ]);
},

createProduct: () =>{
  nock('http://api.example.com')
    .post('/products', {
      name: 'Jane Doe',
    })
    .reply(201, {
      id: 2,
      name: 'Jane Doe',
    });
}
}