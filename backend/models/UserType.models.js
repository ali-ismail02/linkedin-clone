const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    type: {
        type: String,
        required: 'type is required'
    }
});

const model = mongoose.model('UserType', userSchema);

module.exports = model;