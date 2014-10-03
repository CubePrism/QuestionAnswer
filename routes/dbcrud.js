var mongoose = require('mongoose');

mongoose.connect('mongodb://127.8.125.130:$OPENSHIFT_MONGODB_DB_PORT/questionsanswer');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
    console.log("Connection Created");
});

var kittySchema = mongoose.Schema({
    name: String
});


var Kitten = mongoose.model('Kitten', kittySchema);

var fluffy = new Kitten({ name: 'fluffy' });

fluffy.save(function (err, fluffy) {
    if (err) return console.error(err);

    console.log("Fluffy Saved");
});