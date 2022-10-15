const mongoose = require('mongoose');

exports.postSchema = mongoose.Schema({
    follower: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'JobSeeker'
    },
    following: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company'
    }
});

const model = mongoose.model('Follow', postSchema);

module.exports = model;