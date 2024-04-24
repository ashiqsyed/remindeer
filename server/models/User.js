const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema( {
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minLength: 6,
    },
    email: {
        type: String,
        unique: true,
    },
});

module.exports = User = mongoose.model('user', UserSchema);