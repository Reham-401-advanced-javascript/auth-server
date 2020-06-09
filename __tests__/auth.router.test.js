'use strict';
const { server } = require('../src/server.js');
const supergoose = require('@code-fellows/supergoose');
const mockRequest = supergoose(server);

const base64 = require('base-64');



describe('Auth Model',()=>{
  it('POST to /signup to create a new user', ()=>{
    let obj = {'username': 'reham', 'password': '1234'};
    return  mockRequest.post('/signup')
      .send(obj)
      .then(result=>{
        console.log('signup',result.body);
        expect(result.status).toEqual(200);
        expect(typeof result.body.token).toEqual('string');

      });
      
  });

  // {
  //   headers:{
  //     "authorization":"Basic m4e321$342"
  //   }
  // }
  it('POST to /signin ', ()=>{
    let obj = {'username': 'reham', 'password': '1234'};
    
    let header={
      headers:{
        'authorization':'reham:1234',
      },
    };
    // let header2=header.headers;
    let header3=base64.encode(header.headers.authorization);
    console.log('cccccccccccc',header3);

    return mockRequest.post('/signin').set({'authorization':header3})
      .send(obj)
      .then(data=>{
        console.log('nnnnnnnnnnnnn',data.body);
        expect(data.status).toEqual(200);
      });
      
  });
  it('GET to /users ', ()=>{
    let obj = {'username': 'reham', 'password': '1234'};
    
    let header={
      headers:{
        'authorization':'reham:1234',
      },
    };
    // let header2=header.headers;
    let header3=base64.encode(header.headers.authorization);
    // console.log('333333333333',header3);

    return mockRequest.get('/users').set({'authorization':header3})
      .send(obj)
      .then(data=>{
        // console.log('44444444444444',data.body);
        expect(data.status).toEqual(200);
      });
      
  });
  it('catch error ', ()=>{
    // let obj = {'username': 'reham', 'password': '1234'};
    return  mockRequest.post('/signup')
      .send()
      .then(result=>{
        expect(result.status).toEqual(403);
  
      });
  });

});


