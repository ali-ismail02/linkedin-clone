const mongoose = require('mongoose');

const companySchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    company_name: {
        type: String,
        required: 'Company name is required'
    },
    industry: {
        type: String,
        required: 'industry is required'
    },
    company_size: {
        type: String,
    },
    overview: {
        type: String,
    },
    hq: {
        type: String,
    },
    website: {
        type: String,
    },
    locations: {
        type: String,
    },jobs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Job'
    }]
});

const model = mongoose.model('Company', companySchema);

module.exports = model;