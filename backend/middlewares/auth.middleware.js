const jwt = require('jsonwebtoken');
const User = require('../models/User.model');
const UserType = require('../models/UserType.model');
const Company = require('../models/Company.model');
const JobSeeker = require('../models/JobSeeker.model');

const authMiddleware = async (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];

    if(!token) return res.status(401).json({message: "Unauthorized"})
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        const user = await User.findOne({email: decoded.email}).lean()

        type = await UserType.findOne(user.user_type)
        if(type.type != "Job Seeker") return res.status(401).json({message: "Unauthenticated"})
        type.type == "Job Seeker" ? info = await JobSeeker.findOne({user:user._id}) : info = await Company.findOne({user:user._id})

        req.user = {
            user,
            info
        }
        next()

    }catch(err){
        return res.status(401).json({message: "Unauthorized1"})
    }

}

module.exports = authMiddleware;



// fetch("url", {
//     headers:{
//         'Authorization': 'Bearer ' + token
//     }
// })