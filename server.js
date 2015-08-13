var express = require('express');
var app = express();
var port = process.env.port || 8080

app.get('/', function (req, res) {
  res.send('Hello World!');
});

var server = app.listen(port, function () {

  console.log('Example app listening at http://%s:%s', host, port);
});

//https://github.com/Ianpyrider/Heroku-Test.git