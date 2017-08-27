var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create the Schema
var listingsSchema = new Schema({
    cost: {type: Number},
    city: {type: String, required: false, unique: false},
});

// export our model
module.exports = mongoose.model('Listings', listingsSchema);