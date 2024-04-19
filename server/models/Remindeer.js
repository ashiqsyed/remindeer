const mongoose = require('mongoose');

const RemindeerSchema = new mongoose.Schema( {
    description: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    img: {
        type: String,
    },
    title: {
        type: String,
        required: true,
    }
});

module.export = Remindeer = mongoose.model('remindeer', RemindeerSchema);