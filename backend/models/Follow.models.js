const mongoose = require('mongoose');

const followSchema = mongoose.Schema({
    follower: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'JobSeeker'
    },
    following: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company'
    }
});

const model = mongoose.model('Follow', followSchema);

module.exports = model;