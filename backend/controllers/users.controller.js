const Application = require('../models/Application.model')
const Follow = require('../models/Follow.model')
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

const getJob = async (req, res)=>{
    console.clear()
    const {id} =req.query
    const job = await Job.findOne({_id:id})
    const arr = new Array()
    job.company_info = await Company.findOne(job.Company)
    arr.push([job,job.company_info])
    res.send(arr)
}

const followOrUnfollow = async (req,res) => {
    console.clear()
    const {id}=req.body
    const user = req.user
    let follow = await Follow.findOne({follwer:user.info._id, following:id})
    if(follow){
        await follow.deleteOne()
        return res.send(follow)
    }
    follow = new Follow()
    follow.follower = user.info._id
    follow.following = id
    await follow.save()
    return res.send(follow)
}

const applyJob = async (req,res) => {
    console.clear()
    const {id}=req.body
    const user = req.user
    app = new Application()
    app.applicant = user.info._id
    app.job = id
    await app.save()
    return res.send(app)
}

const getProfile = async (req, res)=>{
    res.send(req.user)
}

module.exports = {
    getJobs,getProfile,searchJobs,getJob,followOrUnfollow,applyJob
}