'use strict';
const express = require('express');
const basicAuth = require('./middleware/basic.js');
const oauth = require('./middleware/oauth.js');

const users = require('./models/users-model.js');
const router = express.Router();

// router.get('/',goToIndexPage);
router.post('/signup',signup);
router.post('/signin', basicAuth,signin);
router.get('/users', basicAuth ,user);
router.get('/oauth', oauth,oauthentication);

// function goToIndexPage(req,res){
//   res.redirect('../public/index.html');
// }

function signup(req,res){
  users
    .save(req.body)
    .then((user) => {
      const token = users.generateToken(user);
      res.json({ token });
    })
    .catch((err) => res.status(403).send(err.message));
}

function signin (req,res){
  res.json({ token: req.token });
}
function user(req,res){
  res.json(users.list());

}
function oauthentication(req,res){
  res.json({ token: req.token  , user:req.user});

}
module.exports = router;
