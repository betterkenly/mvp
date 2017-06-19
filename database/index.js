var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');
var db = m



var zipCodeSchema = mongoose.Schema({

  zip: {type: String, unqiue: true},
  city: {type: String}

});

var ZipCode = mongoose.model('zipCode', zipCodeSchema);

module.exports = ZipCode;