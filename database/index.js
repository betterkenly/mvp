var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('The DB is CONNECTED ')
});

var zipCodeSchema = mongoose.Schema({

  zip: {type: String, unqiue: true},
  city: {type: String, unqiue: true},
  date: {type: String}

});

var ZipCode = mongoose.model('zipCode', zipCodeSchema);


module.exports = ZipCode;