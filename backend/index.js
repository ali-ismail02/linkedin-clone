const express = require('express');
require('dotenv').config();
require('./config/db.config')
const app = express();
app.use(express.json());

const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/users.routes');
const companyRoutes = require('./routes/companies.routes');
app.use('/auth', authRoutes)
app.use('/user', userRoutes)
app.use('/company', companyRoutes)

app.listen(process.env.PORT, (err)=>{
    if(err) throw err;
    console.log(`server running on port ${process.env.PORT}`);
})