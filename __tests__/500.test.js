'use strict';
const { server } = require('../src/server.js');
const supergoose = require('@code-fellows/supergoose');
const mockRequest = supergoose(server);

//500 err
describe('sever', () => {
  it('return 500err', ()=>{
    let obj = {'username': 'reham', 'password': '1234'};
    return mockRequest.post('/signup')
      .send(obj)
      .then(result=>{
        return mockRequest.get('/users')
          .then(data =>{
            expect(data.status).toEqual(500);
          });
      });
  });
});