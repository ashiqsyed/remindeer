const express = require('express');
const router = express.Router();
var bodyParser = require("body-parser");
const bcrypjs = require('bcryptjs');
const jwt = require('jsonwebtoken');


const User = require('../../models/User');

//getting users
router.get('/', (req, res) => {
    User.find()
        .then( (users) => res.json(users))
        .catch( (err) => res.status(404).json( {noitemsfound: "No users found"}));
});

router.post('/', bodyParser.json(), (req, res) => {
    User.create(req.body)
        .then( (user) => res.json( {msg: 'User added successfully!'}))
        .catch( (err) => res.status(400).json( {error: "Error"}));
});


module.exports = router;