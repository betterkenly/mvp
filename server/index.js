var express = require('express');
var bodyParser = require('body-parser');
var db = require('../database/index.js');
var rp = require('request');
var Promise = require('bluebird');

var sampleData = [{"coord":{"lon":-122.44,"lat":37.72},"weather":[{"id":721,"main":"Haze","description":"haze","icon":"50d"},{"id":521,"main":"Rain","description":"shower rain","icon":"09d"}],"base":"stations","main":{"temp":302.24,"pressure":1010,"humidity":50,"temp_min":296.15,"temp_max":309.15},"visibility":16093,"wind":{"speed":5.1,"deg":310},"clouds":{"all":1},"dt":1497898560,"sys":{"type":1,"id":478,"message":0.0043,"country":"US","sunrise":1497876486,"sunset":1497929683},"id":0,"name":"San Francisco","cod":200}];

var app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

app.get('/search', function (req, res) {

  // let city = '';
  let date = new Date();
  let zip = req.url.substring(16);
  let API_KEY ='6f1c99a92673f7130b73fc9b65c0b1fa';
  let options = {
    // url: `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&appid=6f1c99a92673f7130b73fc9b65c0b1fa`,
   url: `http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=13e4be1c35dec84037ee448fa03d17e3`,

    headers: {
      'user-agent': 'Cartman Luk'
    }
  }; 
     var newSearch = new db({
      zip : zip,
      date: date
    });
    newSearch.save((err) => {
      if(err) {
        console.log(err);
      } else {
        console.log('i guess it is save!!!!!!!');
      }
    })

 rp(options, function(err, data){


   if(err) {
     throw err;
   } else {
     data.body = JSON.parse(data.body);
     console.log('data.body.name: ', data.body.name);
    city = data.body.name;
    console.log('this is the ',zip);
    // var newSearch = new db({
    //   zip : zipCode,
    //   city: data.body.name,
    //   date: date
    // });
    // newSearch.save();
    //  newSearch.save((err) => {
    //   if(err) {
    //     console.log(err);
    //   } else{
        res.send(JSON.stringify(data.body));
    // var newSearch = new db({
    //   zip : zipCode,
    //   date: date
    // });
    // newSearch.save((err) => {
    //   if(err) {
    //     console.log(err);
    //   }
    // });
    //   }
    // });
    
   }



  // rp(options)
  //     .then((data) => {

  //   var newSearch = new db({
  //     zip : zipCode,
  //     city: data.name,
  //     date: date
  //   });

  //   db.create(newSearch);
  //   console.log('this is the db save::::', newSearch);
  //   return data;


  })
  // .then( (data) => {res.send(data);})
  // .catch((err) => {
  //   console.log('ERROR TO SEND DATA FROM SERVER');
  // })


});

app.get('/search/history', function (req, res) {
  var history = db.zipcodes.find();
  console.log(history);
  res.send(history);
 
});

var port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

