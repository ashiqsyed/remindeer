const express = require('express');
const router = express.Router();
var bodyParser = require("body-parser");

const Remindeer = require('../../models/Remindeer');


//gets all the remindeers
router.get('/', (req, res) => {
    Remindeer.find()
        .then( (remindeers) => {
            res.json(remindeers);
        })
        .catch( (err) => { res.status(404).json( {noitemsfound: 'Could not find items'})});
});

//gets the specific remindeer by id
router.get('/:id', (req, res) => {
    Remindeer.findById(req.params.id)
        .then( (remindeer) => res.json(remindeer))
        .catch( (err) => res.status(404).json( {noitemfound: 'No Remindeer Found!'}));
});

//updates a remindeer by ID
router.put('/:id', (req, res) => {
    Remindeer.findByIdAndUpdate( req.params.id, req.body)
        .then( (remindeer) => res.json( {msg: "Item updated successfully"}))
        .catch( (err) => res.status(400).json( {error: 'Unable to update database'})); 
});

//creates a Remindeer
router.post('/', bodyParser.json(), (req, res) => {
    Remindeer.create(req.body)
        .then( (remindeer) => res.json( {msg: 'Remindeer added successfully!'}))
        .catch( (err) => res.status(400).json( {error: "Error"}));
});

//deletes a Remindeer
router.delete('/:id', (req, res) => {
    Remindeer.findByIdAndDelete(req.params.id)
        .then( (remindeer) => res.json( {msg: "Remindeer deleted successfully"}))
        .catch( (err) => res.status(404).json( {error: "Could not delete Remindeer"}));
});


module.export = router;