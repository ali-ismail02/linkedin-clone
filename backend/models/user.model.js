const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    user_type: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserType'
    },
    email: {
        type: String,
        required: 'email is required',
        unique:true,
        trim:true
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

const model = mongoose.model('User', userSchema);

module.exports = model;