var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create the Schema
var rentalsSchema = new Schema({
    rent: {type: Number, required: true, unique: false},
    sqft: {type: Number},
    city: {type: String, required: false, unique: false},

});

// export our model
module.exports = mongoose.model('Rentals', rentalsSchema);