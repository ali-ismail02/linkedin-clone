const User = require('../models/User.model')
const Jobs = require('../models/Job.model')

const getJobs = async (req, res)=>{
    const user = req.user;
    res.send(user)
}

module.exports = {
    getJobs
}