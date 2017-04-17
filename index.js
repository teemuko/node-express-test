var express = require('express')
var app = express()

var port = 8010

app.get('/', function (req, res) {
  res.send('Hello NodeJS World!')
})

app.listen(port, function () {
  var message = 'Node Express example app listening on port ' + port + '!'
  console.log(message)
})

