'use strict';

const router = require('express').Router();
const error = require('./errors');
const path = require('path');
const connection = require('../models/config/connection');
const hash = require('./hashpassword');
const validation = require('../helper/validation');

router.post('/registered', (req, res, next) => {
  let data = {
    userName: req.body.userName,
    userEmail: req.body.userEmail,
    userPassword: req.body.userPassword,
    repeatPassword: req.body.repeatPassword
  };
  console.log(data);
  const { error } = validation(data);
  if (error !== undefined) {
    return res
      .status(400)
      .send(`<h1>${error.toString().replace('ValidationError:', '')}`);
  }

  hash(data.userPassword).then(result => {
    const sql = {
      text: 'INSERT INTO users (username, email, password) VALUES ($1,$2,$3);',
      values: [`${data.userName}`, `${data.userEmail}`, `${result}`]
    };

    connection
      .query(sql.text, sql.values)
      .then(data => res.json(data.rowCount))
      .catch(err => console.log('hey there is err at getting db', err));
  });
});

router.use(error.client);
router.use(error.server);

module.exports = router;
