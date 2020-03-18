const express = require('express');
const app = express();
const path = require('path');
const cookie = require('cookie-parser');
const router = require('./controllers/index');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookie());
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(router);

module.exports = app;
