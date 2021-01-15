var mongoose = require('mongoose');

var localdb ="mongodb://localhost:27017/boook_library"
// var globalDB = ""
mongoose.connect(localdb, { useNewUrlParser: true , useUnifiedTopology: true});
var db = mongoose.connection;
db.on('connected', ()=>console.log('DB is connected'))
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

module.exports = db;