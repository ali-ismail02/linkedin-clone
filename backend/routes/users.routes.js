const {Router} = require('express');
const {getJobs} = require('../controllers/users.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const router = Router();

router.get('/getJobs', authMiddleware, getJobs);


module.exports = router;