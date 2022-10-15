const User = require('../models/User.model')
const Job = require('../models/Job.model')
const Company = require('../models/Company.model')

const getJobs = async (req, res)=>{
    console.clear()
    const user = req.user;
    const jobs = await Job.find({available:1,location: { $in: user.info.seeking_locations },job_title: user.info.seeking}).sort({date:-1})
    const arr = new Array()
    await Promise.all(jobs.map(async (job) => {
        job.company_info = await Company.findOne(job.Company)
        arr.push([job,job.company_info])
    }));
    res.send(arr)
}

module.exports = {
    getJobs
}