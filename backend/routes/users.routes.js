const {Router} = require('express');
const {getJobs,getProfile,searchJobs} = require('../controllers/users.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const router = Router();

router.get('/get-jobs', authMiddleware, getJobs);
router.get('/get-profile', authMiddleware, getProfile);
router.get('/search', authMiddleware, searchJobs);


module.exports = router;