const mongoose = require('mongoose');

const applicationSchema = mongoose.Schema({
    applicant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'JobSeeker'
    },
    job: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Job'
    },
    status: {
        type: Number,
    },
});

const model = mongoose.model('Applications', applicationSchema);

module.exports = model;