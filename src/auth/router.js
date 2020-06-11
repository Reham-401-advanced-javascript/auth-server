'use strict';
const express = require('express');
const basicAuth = require('./middleware/basic.js');
const oauth = require('./middleware/oauth.js');
const bearerAuth = require('./middleware/bearer.js');
const acl = require('./middleware/authorize.js');


const users = require('./models/users-model.js');
const router = express.Router();

router.post('/signup',signup);
router.post('/signin', basicAuth,signin);
router.get('/users', basicAuth ,user);
router.get('/oauth', oauth,oauthentication);
router.get('/secret', bearerAuth ,bearerauth);
router.get('/read', bearerAuth,acl ('read') ,aclFunction);
router.post('/add', bearerAuth,acl ( 'create') ,aclFunction);
router.put('/change', bearerAuth,acl ('update' ), aclFunction);
router.delete('/remove', bearerAuth,acl('delete' ), aclFunction);


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
function aclFunction (req,res){
  res.status(200).send('OK!!!');
}
module.exports = router;
