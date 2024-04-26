const express = require('express');
const router = express.Router();
var bodyParser = require("body-parser");
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const auth = require("../../middleware/auth");
const User = require('../../models/User');

//Signup Route: 
router.post("/signup", bodyParser.json(), async (req, res) => {
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

        const hashedPassword = await bcryptjs.hash(password, 8);
        const newUser = new User( {username, password: hashedPassword, email});

        const savedUser = await newUser.save();
        console.log(savedUser.username);
        
        

        res.json(savedUser);

    } catch (err) {
        // console.log(err);
        res.status(500).json( {error: err.message});
    }
});

//Login Route:
router.post("/login", bodyParser.json(), async (req, res) => {
    try {
        console.log("CHECK");
        const { username, password} = req.body;
        if (!username || !password) {
            res.status(400).json( { msg: "Please enter in all fields"});
        }
        
        const user = await User.findOne( {username} );
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
    catch (err) {
        res.status(500).json( {error: err.message});
    }
});

//checking if the token is valid:
router.post("/tokenIsValid", async (req, res) => {
    try {
        const token = req.header("Authorization");
        if (!token)
            return res.json(false);
        const verified = jwt.verify(tokenParts[1], process.env.JWT_SECRET);
        if (!verified) 
            return res.json(false);
        const user = await User.findById(verified.id);
        if (!user) return res.json(false);
        return res.json(true);
    } catch {
        res.status(500).json( { error : err.message});
    }

});

// router.delete('/:id', auth, (req, res) => {
//     User.findByIdAndRemove(req.params.id, req.body)
//         .then( (user) => res.json( {msg: "Item deleted successfully!"}))
//         .catch( (err) => res.status(404).json( {error: 'No such a item'}))
// })

// getting users
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