'use strict';
const base64 = require('base-64');
const users = require('../models/users-model.js');

/*
headers:{
  "authorization":"Basic m4e321$342"
}
*/
// this is used for signin
module.exports = (req, res, next) => {
  // check if the client sent authorization headers
  // headers = {}
  if (!req.headers.authorization) {
    next('Invalid Login');
  } else {
    // user:pass
    console.log('aaaaaaaaaaaaaaaaaaaaaaaaaa', req.headers);
    const basic = req.headers.authorization.split(' ').pop(); // ["Basic","m4e321$342"]
    console.log('basic', basic);
    console.log('mmmmmmmmmmmmm',base64.decode(basic).split(':'));
    const [user, pass] = base64.decode(basic).split(':'); // "mahmoud:1234"
    console.log('__BasicAuth__', user, pass);
    users
      .authenticateBasic(user, pass)
      .then((validUser) => {
        req.token = users.generateToken(validUser);
        console.log('tooooooken',req.token);
        next();
      })
      .catch((err) => next(err));
  }
};