const mongoose = require('mongoose');

const URI = 'mongodb://localhost:27017/mean-app';


// Adding the option , { useNewUrlParser: true }
// Because of this error:
// DeprecationWarning: current URL string parser is deprecated, and will be removed in a future version.
// To use the new parser, pass option { useNewUrlParser: true } to MongoClient.connect.
mongoose.connect(URI, { useNewUrlParser: true })
        .then(db => console.log('DB is connected'))
        .catch(err => console.error(err));
mongoose.Promise = global.Promise;

module.exports = mongoose;
