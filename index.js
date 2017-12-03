'use strict';

const express = require('express');
const winston = require('winston');
const dateformat = require('dateformat');
var app = express();

var port = 8010;

// Initializes logger.
const logger = new (winston.Logger)({
  level: 'info',
  transports: [
    new winston.transports.Console({
    timestamp() {
      return dateformat(new Date(), 'yyyy-mm-dd HH:MM:ss');
    },
    colorize: true
    })
  ]
});

// Initializes routes.
app.use(express.static('public'));
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/html/index.html');
});

app.listen(port, function () {
    logger.info('Node Express example app listening on port ' + port + '!');
});
