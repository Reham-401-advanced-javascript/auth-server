'use strict';
const express = require('express');
const basicAuth = require('./middleware/basic.js');
const oauth = require('./middleware/oauth.js');

const users = require('./models/users-model.js');
const router = express.Router();

router.post('/signup', (req, res) => {
  users
    .save(req.body)
    .then((user) => {
      const token = users.generateToken(user);
      res.json({ token });
    })
    .catch((err) => res.status(403).send(err.message));
});
router.post('/signin', basicAuth, (req, res) => {
  res.json({ token: req.token });
});
router.get('/users', basicAuth, (req, res) => {
  res.json(users.list());
});
router.get('/oauth', oauth, (req, res) => {
  res.json({ token: req.token  , user:req.user});
});
module.exports = router;
