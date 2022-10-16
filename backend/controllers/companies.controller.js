const Job = require('../models/Job.model')
const Company = require('../models/Company.model')
const Application = require('../models/Application.model')
const User = require('../models/User.model')
const JobSeeker = require('../models/JobSeeker.model')

const addJob = async (req, res) => {
    const user = req.user;
    const { job_title, work_time, requirements, description, location } = req.body;
    console.clear()
    try {
        const job = new Job();
        const company = await Company.findOne({ user: user.user._id });
        console.log(company)
        job.company = company._id;
        job.job_title = job_title;
        job.Date = new Date();
        job.work_time = work_time;
        job.requirements = requirements;
        job.description = description;
        job.location = location;
        job.available = 1;
        await job.save();
        company.jobs.push(job._id)
        company.save()
        res.json(job)
    } catch (err) {
        res.status(400).json({
            message: "can't add job " + err.message
        })
    }
}

const deleteJob = async (req, res) => {
    console.clear()
    const { id } = req.body
    await Application.deleteMany({job:id})
    const app = await Job.deleteOne({_id:id})
    res.send(app)
}

const setJobTaken = async (req, res) => {
    console.clear()
    const { id } = req.body
    const app = await Job.updateOne({_id:id},{available:0})
    res.send(app)
}

const getApplications = async (req, res) => {
    console.clear()
    const { id } = req.query
    const apps = await Application.find({ job: id })
    const arr = new Array()
    await Promise.all(apps.map(async (app) => {
        const applicant = await JobSeeker.findOne(app.applicant)
        const applicant_info = await User.findOne(applicant.user)
        arr.push({ app,applicant_info, applicant })
    }));
    res.send(arr)
}

const acceptOrRejectApplication = async (req, res) => {
    console.clear()
    const { applicant_id, status } = req.body;
    const app = await Application.updateOne(applicant_id, { status: status })
    res.send(app)
}
module.exports = {
    addJob, acceptOrRejectApplication, getApplications,deleteJob,setJobTaken
}