var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create the Schema
var listingsSchema = new Schema({
    name: {type: String, required: true, unique: true},
    location: {type: String},
    date_of_birth: {type: Date, required: false, unique: false},
    internet_pts:{type: Number, required: false}
});

// export our model
module.exports = mongoose.model('Listings', listingsSchema);