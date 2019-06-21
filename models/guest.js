const mongoose = require('mongoose');

const guestSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },

    email:{
        type: String,
        required: true
    },

    address:{
        type: String,
        required: true
    },

    comment:{
        type: String,
        required: true
    },

    created:{
        type: Date,
        required: true,
        default: Date.now
    },
});

module.exports = new mongoose.model('Guest', guestSchema);