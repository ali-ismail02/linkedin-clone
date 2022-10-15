const mongoose = require('mongoose');

exports.postSchema = mongoose.Schema({
    applicant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'JobSeeker'
    },
    Job: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Job'
    }
});

const model = mongoose.model('Applications', postSchema);

module.exports = model;