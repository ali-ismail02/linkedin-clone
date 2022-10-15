const mongoose = require('mongoose');

exports.postSchema = mongoose.Schema({
    user_type: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserType'
    },
    email: {
        type: String,
        required: 'email is required'
    },
    password: {
        type: String,
        required: 'password is required',
        select: false
    },
    image: {
        type: String,
    },
    background: {
        type: String,
    }
});

const model = mongoose.model('User', postSchema);

module.exports = model;