var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');



var zipCodeSchema = mongoose.Schema({
  // TODO: your schema here!
  id: {type: Number, unqiue: true},
  zip: {type: String, unqiue: true}

});

var ZipCode = mongoose.model('zipCode', zipCodeSchema);

module.exports = ZipCode;