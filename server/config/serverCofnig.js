const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const path = require('path');

function serverConfig(app) {
  app.use(cookieParser());

  app.use(express.urlencoded({ extended: true }));

  app.use(express.json());

  app.use(morgan('dev'));

  app.use(express.static(path.join(__dirname, '../public')));
}

module.exports = serverConfig;
