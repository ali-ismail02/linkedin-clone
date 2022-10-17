const express = require('express');
require('dotenv').config();
require('./config/db.config')
const app = express();
const User = require('./models/User.model')
app.use(express.json());

const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/users.routes');
const companyRoutes = require('./routes/companies.routes');
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use('/auth', authRoutes)
app.use('/user', userRoutes)
app.use('/company', companyRoutes)

app.get('/img',async function(req, res){
    console.clear()
    const {id} = req.query
    const result = await User.findOne({_id:id})
    console.log(__dirname+"/"+ result.image)
    const path = __dirname+"/"+result.image
    res.sendFile(path, function (err) {
        if (err) {
            console.log(err);
        } else {
        }
    });
});

app.listen(process.env.PORT, (err)=>{
    if(err) throw err;
    console.log(`server running on port ${process.env.PORT}`);
})