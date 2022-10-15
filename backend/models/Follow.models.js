const mongoose = require('mongoose');

exports.postSchema = mongoose.Schema({
    follower: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    following: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

const model = mongoose.model('follow', postSchema);

module.exports = model;