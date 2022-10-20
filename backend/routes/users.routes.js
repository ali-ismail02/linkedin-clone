const {Router} = require('express');
const {getJobs,getProfile,searchJobs,getJob,followOrUnfollow,applyJob,getNotifications,getImg,checkIfFollowed} = require('../controllers/users.controller');
const authMiddleware = require('../middlewares/auth.middleware');
const router = Router();

router.get('/get-jobs', authMiddleware, getJobs);
router.get('/get-profile', authMiddleware, getProfile);
router.get('/search', authMiddleware, searchJobs);
router.post('/follow', authMiddleware, followOrUnfollow);
router.post('/apply-job', authMiddleware, applyJob);
router.get('/get-job', authMiddleware, getJob);
router.get('/followed', authMiddleware, checkIfFollowed);
router.get('/get-notifications', authMiddleware, getNotifications);
router.post('/get-img', authMiddleware, getImg);


module.exports = router;