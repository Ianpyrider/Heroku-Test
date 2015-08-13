var express = require('express');
var app = express();
var port = process.env.port || 8080

app.get('/', function (req, res) {
  res.send('Hello World!');
});

var server = app.listen(port);

//https://github.com/Ianpyrider/Heroku-Test.git