const mongoose = require('mongoose');

const userTypeSchema = mongoose.Schema({
    type: {
        type: String,
        required: 'type is required'
    }
});

const model = mongoose.model('UserType', userTypeSchema);

module.exports = model;