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

const searchJobs = async (req, res)=>{
    console.clear()
    const {search} =req.query
    console.log()
    const jobs = await Job.find({job_title: { $regex: search, $options: "i" }}).sort({date:-1})
    const arr = new Array()
    await Promise.all(jobs.map(async (job) => {
        job.company_info = await Company.findOne(job.Company)
        arr.push([job,job.company_info])
    }));
    res.send(arr)
}


const getProfile = async (req, res)=>{
    res.send(req.user)
}

module.exports = {
    getJobs,getProfile,searchJobs
}