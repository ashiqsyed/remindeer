const express = require('express');
const router = express.Router();
var bodyParser = require("body-parser");

const Remindeer = require('../../models/Remindeer');
const auth = require("../../middleware/auth")
router.use(auth);

//gets all the remindeers
router.get("/", auth, (req, res) => {
    Remindeer.find()
    .then((remindeers) => {
        // res.json(remindeers);
        res.send(remindeers);
    })
    .catch((err) => res.status(404).json("No remindeers found"));
})



//gets the specific remindeer by id
router.get('/:id', auth, (req, res) => {
    Remindeer.findById(req.params.id)
    .then( (remindeer) => res.send(remindeer))
    .catch( (err) => res.status(404).json( {noitemfound: 'No Remindeer Found!'}));
    // res.json("Testing get/:id server route");
});

//updates a remindeer by ID
router.put('/:id', auth, bodyParser.json(), (req, res) => {
    Remindeer.findByIdAndUpdate( req.params.id, req.body)
    .then( (remindeer) => res.send( {msg: "Item updated successfully"}))
    .catch( (err) => res.status(400).json( {error: 'Unable to update database'})); 

    // res.json("testing put/:id server route")
});

//creates a Remindeer
router.post('/', auth, bodyParser.json(), (req, res) => {
    // console.log(req.body);
    Remindeer.create(req.body)
    .then( (remindeer) => res.send( {msg: 'Remindeer added successfully!'}))
    .catch( (err) => res.status(400).json( {error: "Error"}));

    // res.json("testing post/ server route")
});

//deletes a Remindeer
router.delete('/:id', auth, (req, res) => {
    Remindeer.findByIdAndDelete(req.params.id)
        .then( (remindeer) => res.send( {msg: "Remindeer deleted successfully"}))
        .catch( (err) => res.status(404).json( {error: "Could not delete Remindeer"}));
});


module.exports = router;