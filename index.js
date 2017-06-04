'use strict';

var express = require('express');
var app = express();

var port = 8010;

app.use(express.static('public'));
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/html/index.html');
});

app.listen(port, function () {
  var message = 'Node Express example app listening on port ' + port + '!';
  console.log(message);
});

