const express = require('express');
const router = express.Router();
var bodyParser = require("body-parser");
const bcrypjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
//const auth = ("../../middleware/auth")



const User = require('../../models/User');

//Signup Route: 
router.post("/signup", async (req, res) => {
    try {
        const{ username, password, email} = req.body;
        if ( !password || !username) {
            return res.status(400).json( {msg: "Please fill in username and password"});
        }
        if (password.length < 6) {
            return res.status(400).json( {msg: "Password must be greater than 6 characters!"});
        }
        const existingUser = await User.findOne( {username});
        if (existingUser) {
            return res.status(400).json( {msg: "Already existing username"});
        }

        const hashedPassword = await newUser.save();
        const newUser = new User( {username, password: hashedPassword, email});

        const savedUser = await newUser.save();
        console.log(savedUser.username);
        res.json(savedUser);

    } catch (err) {
        res.status(500).json( {error: "Error!"});
    }
});

//Login Route:
router.post("/login", async (req, res) => {
    try {
        const { username, password} = req.body;
        if (!username || !password) {
            res.status(400).json( { msg: "Please enter in all fields"});
        }
        
        const user = await User.findOne( {email} );
        if (!user) {
            return res.status(400).json( {msg: "User with this username does not exist"});
        }

        const isMatch = await bcryptjs.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json( {msg: "Incorrect Password!"});
        }
        const token = jwt.sign( {id: user._id }, process.env.JWT_SECRET);
        res.json( {token, user: {id: user._id, username: user.username} });

    }
    catch {
        res.status(500).json( {error: "Error!"});
    }
});

//checking if the token is valid:
router.post("/tokenIsValid", async (req, res) => {

});

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