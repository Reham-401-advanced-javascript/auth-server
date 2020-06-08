'use strict';
const { server } = require('../src/server.js');
const supergoose = require('@code-fellows/supergoose');
const mockRequest = supergoose(server);


describe('Auth Model',()=>{
  it('POST to /signup to create a new user', ()=>{
    let obj = {'username': 'reham', 'password': '1234'};
    return  mockRequest.post('/signup')
      .send(obj)
      .then(result=>{
        // console.log('signup',result);
        expect(result.status).toEqual(200);
        expect(typeof result.body.token).toEqual('string');

      });
      
  });

});