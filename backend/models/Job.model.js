const mongoose = require('mongoose');

const jobSchema = mongoose.Schema({
    company: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company'
    },
    job_title: {
        type: String,
        required: 'job_title is required'
    },
    Date: {
        type: Date,
        required: 'Date is required'
    },
    work_time: {
        type: String,
    },
    requirements: {
        type: String,
    },
    description: {
        type: String,
    },
    location: {
        type: String,
    },
    available: {
        type: Number,
        select: false
    }
});

const model = mongoose.model('Job', jobSchema);

module.exports = model;