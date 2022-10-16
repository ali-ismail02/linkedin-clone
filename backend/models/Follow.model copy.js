const mongoose = require('mongoose');

const followSchema = mongoose.Schema({
    job_seeker: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'JobSeeker'
    },
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company'
    },
    job: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'job'
    },
    read: {
        type: Number,
    }
});

const model = mongoose.model('Notification', notificationSchema);

module.exports = model;