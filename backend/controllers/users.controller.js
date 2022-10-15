const User = require('../models/User.model')
const Job = require('../models/Job.model')

const getJobs = async (req, res)=>{
    const user = req.user;
    const jobs = await Job.find({available:1,location: { $in: user.info.seeking_locations },job_title: user.info.seeking}).sort({date:-1})
    console.log(user.info.seeking.toString())
    res.send(jobs)
}

module.exports = {
    getJobs
}