const User = require('../models/User.model');
const UserType = require('../models/UserType.model');
const Company = require('../models/Company.model');
const JobSeeker = require('../models/JobSeeker.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const signup = async (req, res) => {
    const { email, password, user_type } = req.body;
    try {
        const user = new User();
        user.email = email;
        user.password = await bcrypt.hash(password, 10);
        user_type == 1 ? type = "Company" : type = "Job Seeker"
        type = await UserType.findOne({ type })
        console.log(type)
        user.user_type = type
        await user.save();
        if (user_type == 1) {
            const { company_name, industry, company_size, overview, hq, website, locations } = req.body;
            const company = new Company();
            company.company_name = company_name;
            company.industry = industry;
            company.company_size = company_size;
            company.overview = overview;
            company.hq = hq;
            company.website = website;
            company.locations = locations;
            company.user = await User.findOne({ email }).select("_id");
            await company.save();
            res.json(company)
        } else {
            const { first_name, last_name, location, school, start_year, end_year, prev_job, company_name, exp, seeking, seeking_locations, resume } = req.body;
            const job_seeker = new JobSeeker();
            job_seeker.first_name = first_name;
            job_seeker.last_name = last_name;
            job_seeker.location = location;
            job_seeker.school = school;
            job_seeker.start_year = start_year;
            job_seeker.end_year = end_year;
            job_seeker.prev_job = prev_job;
            job_seeker.company_name = company_name;
            job_seeker.exp = exp;
            job_seeker.seeking = seeking;
            job_seeker.seeking_locations = seeking_locations;
            job_seeker.resume = resume;
            job_seeker.user = await User.findOne({ email }).select("_id");
            await job_seeker.save();
            res.json(job_seeker)
        }
    } catch (err) {
        res.status(400).json({
            message: "can't add user" + err.message
        })
    }

}

const login = async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select("+password");

    if (!user) return res.status(404).json({ message: "Invalid Credentials" });

    const isMatch = bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(404).json({ message: "Invalid Credentials" });

    type = await UserType.findOne(user.user_type)

    const token = jwt.sign({ email: user.email, name: user.name}, process.env.JWT_SECRET_KEY, {
        expiresIn: '24h'
    });
    res.status(200).json({token:"Bearer " + token,type:type.type})
}


module.exports = {
    signup,
    login
}