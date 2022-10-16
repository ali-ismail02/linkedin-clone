const {Router} = require('express');
const {addJob, acceptOrRejectApplication,getApplications} = require('../controllers/companies.controller');
const authMiddleware = require('../middlewares/companyAuth.middleware');
const router = Router();

router.post('/addJob', authMiddleware, addJob);
router.get('/get-applications', authMiddleware, getApplications);
router.post('/application', authMiddleware, acceptOrRejectApplication);


module.exports = router;