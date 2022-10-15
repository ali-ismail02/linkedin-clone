const Job = require('../models/Job.model')
const Company = require('../models/Company.model')
const Application = require('../models/Application.model')

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

const acceptOrRejectApplication = async (req, res) => {
    const { status, job_id, applicant_id } = req.body;
    app = await Application.find({applicant:applicant_id,job:job_id})
    if(!app){
        return res.status(400).send('Error')
    }
    app.status = status
    res.send(app)
}
module.exports = {
    addJob,acceptOrRejectApplication
}