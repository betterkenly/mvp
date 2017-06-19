var express = require('express');
var bodyParser = require('body-parser');
var db = require('../database/index.js');

var sampleData = [{"coord":{"lon":-122.44,"lat":37.72},"weather":[{"id":721,"main":"Haze","description":"haze","icon":"50d"},{"id":521,"main":"Rain","description":"shower rain","icon":"09d"}],"base":"stations","main":{"temp":302.24,"pressure":1010,"humidity":50,"temp_min":296.15,"temp_max":309.15},"visibility":16093,"wind":{"speed":5.1,"deg":310},"clouds":{"all":1},"dt":1497898560,"sys":{"type":1,"id":478,"message":0.0043,"country":"US","sunrise":1497876486,"sunset":1497929683},"id":0,"name":"San Francisco","cod":200}];

var app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.post('/search', function (req, res) {
  // TODO
  var zipCode = req.body.zipCode;
  var API_KEY ='6f1c99a92673f7130b73fc9b65c0b1fa'; 

  console.log('this is the zipcode: ' , zipCode);


});

app.get('/repos', function (req, res) {
  // TODO
});

var port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

