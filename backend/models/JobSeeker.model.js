const mongoose = require('mongoose');

const jobSeekerSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    first_name: {
        type: String,
        required: 'first name is required'
    },
    last_name: {
        type: String,
        required: 'last name is required'
    },
    location: {
        type: String,
    },
    school: {
        type: String,
    },
    major: {
        type: String,
    },
    start_year: {
        type: Number,
    },
    end_year: {
        type: Number,
    },
    prev_job: {
        type: String,
    },
    company_name: {
        type: String,
    },
    exp: {
        type: Number,
    },
    seeking: {
        type: String,
    },
    seeking_locations: {
        type: Array,
    },
    resume: {
        type: String,
    }
});

const model = mongoose.model('JobSeeker', jobSeekerSchema);

module.exports = model;