const {Router} = require('express');
const {getJobs,getProfile,searchJobs,getJob,followOrUnfollow} = require('../controllers/users.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const router = Router();

router.get('/get-jobs', authMiddleware, getJobs);
router.get('/get-profile', authMiddleware, getProfile);
router.get('/search', authMiddleware, searchJobs);
router.post('/follow', authMiddleware, followOrUnfollow);
router.get('/get-job', authMiddleware, getJob);


module.exports = router;