var express = require('express');
var router = express.Router();
// bring in our Mongoose model
var Rentals = require('../models/rentals.schema.js');
//var Rentals = require('../models/rentals.schema.js');


router.get('/', function(req, res) {
    // find all of the people in the collection
    Rentals.find({}, function(err, data) {
        if (err) {
            console.log('find error: ', err);
            res.sendStatus(500);
        } else {
            console.log('found data: ', data);            
            res.send(data);
        }
    });
});

router.post('/', function(req, res) {
    console.log('new person to store: ', req.body);

    // use model/constructor to make a Mongoose Object
    var rentalsToSaveToTheCollection = new Rentals(req.body);

    // insert into our collection
    rentalsToSaveToTheCollection.save(function(err, data) {
        console.log('saved to the collection: ', data);
        if(err) {
            console.log('save error: ', err);
            
            res.sendStatus(500);
        } else {
            res.sendStatus(201);
        }
        
    });
});


    



module.exports = router;