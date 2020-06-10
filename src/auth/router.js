'use strict';
const express = require('express');
const basicAuth = require('./middleware/basic.js');
const oauth = require('./middleware/oauth.js');
const bearerOauth = require('./middleware/bearer.js');

const users = require('./models/users-model.js');
const router = express.Router();

router.post('/signup',signup);
router.post('/signin', basicAuth,signin);
router.get('/users', basicAuth ,user);
router.get('/oauth', oauth,oauthentication);
router.get('/secret', bearerOauth ,bearerauth);


function signup(req,res){
  users
    .saveUser(req.body)
    .then((user) => {
      const token = users.generateToken(user);
      res.json({ token });
    })
    .catch((err) => res.status(403).send(err.message));
}

function signin (req,res){
  res.json({ token: req.token });
}
async function user(req,res){
  res.json(await users.list());

}
function oauthentication(req,res){
  res.json({ token: req.token  , user:req.user});

}
function bearerauth(req,res){
  res.json(req.user);

}
module.exports = router;
