const Application = require('../models/Application.model')
const Follow = require('../models/Follow.model')
const Job = require('../models/Job.model')
const Company = require('../models/Company.model')
const Notification = require('../models/Notification.model')
const User = require('../models/User.model')
const fs = require('fs')

const getJobs = async (req, res) => {
    console.clear()
    const user = req.user;
    const jobs = await Job.find({ available: 1, location: { $in: user.info.seeking_locations }, job_title: user.info.seeking }).sort({ date: -1 })
    const arr = new Array()
    await Promise.all(jobs.map(async (job) => {
        job.company_info = await Company.findOne(job.Company)
        job.company_user = await User.findOne(job.company_info.user)
        job.applicant = await Application.count({ job: job._id })
        arr.push([job, job.company_info, job.company_user, job.applicant])
    }));
    res.send(arr)
}

const getImg = async (req, res) => {
    console.clear()
    const { id } = req.body
    const path = await User.findOne({ _id: id })
    console.log("../" + path.image)
    res.sendFile("./" + path.image)
}

const searchJobs = async (req, res) => {
    console.clear()
    const { search } = req.query
    console.log()
    const jobs = await Job.find({ job_title: { $regex: search, $options: "i" } }).sort({ date: -1 })
    const arr = new Array()
    await Promise.all(jobs.map(async (job) => {
        job.company_info = await Company.findOne(job.Company)
        arr.push([job, job.company_info])
    }));
    res.send(arr)
}

const getNotifications = async (req, res) => {
    console.clear()
    const user = req.user
    const notifications = await Notification.find({ job_seeker: user.info._id })
    res.send(notifications)
    await Promise.all(notifications.map(async (notification) => {
        notification.read = 1
        notification.save()
    }));
}

const getJob = async (req, res) => {
    console.clear()
    const { id } = req.query
    const job = await Job.findOne({ _id: id })
    const arr = new Array()
    job.company_info = await Company.findOne(job.Company)
    arr.push([job, job.company_info])
    res.send(arr)
}

const checkIfFollowed = async (req, res) => {
    console.clear()
    const { id } = req.body
    const user = req.user
    let follow = await Follow.findOne({ follwer: user.info._id, following: id })
    if (follow) {
        return res.send("Unfollow")
    }
    return res.send("Follow")
}

const followOrUnfollow = async (req, res) => {
    console.clear()
    const { id } = req.query
    const user = req.user
    let follow = await Follow.findOne({ follwer: user.info._id, following: id })
    if (follow) {
        await follow.deleteOne()
        return res.send(follow)
    }
    follow = new Follow()
    follow.follower = user.info._id
    follow.following = id
    await follow.save()
    return res.send(follow)
}

const applyJob = async (req, res) => {
    console.clear()
    const { job_id,resume } = req.body
    const user = req.user
    app = new Application()
    app.applicant = user.info._id
    app.job = job_id
    app.status = 0
    const file_name = Date.now()
    const path = './resumes/' + file_name + '.docx'
    if (resume) {
        let base64Data = resume.replace(/^data\:application\/vnd\.openxmlformats\-officedocument\.wordprocessingml\.document\;base64,/, "");
        fs.writeFile(path, base64Data, { encoding: 'base64' }, (err) => {
        });
        app.resume = file_name + '.docx'
    }
    await app.save()
    return res.send(app)
}

const getProfile = async (req, res) => {
    res.send(req.user)
}

module.exports = {
    getJobs, getProfile, searchJobs, getJob, followOrUnfollow, applyJob, getNotifications, getImg, checkIfFollowed
}