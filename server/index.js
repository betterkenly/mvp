var express = require('express');
var bodyParser = require('body-parser');
var db = require('../database/index.js');

var app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.post('/search', function (req, res) {
  // TODO
  var zipCode = req.body.zipCode;
  console.log('this is the zipcode: ' , zipCode);
  

});

app.get('/repos', function (req, res) {
  // TODO
});

var port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

