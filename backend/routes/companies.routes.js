const {Router} = require('express');
const {addJob, acceptOrRejectApplication,getApplications,setJobTaken,deleteJob} = require('../controllers/companies.controller');
const authMiddleware = require('../middlewares/companyAuth.middleware');
const router = Router();

router.post('/add-job', authMiddleware, addJob);
router.get('/get-applications', authMiddleware, getApplications);
router.post('/application', authMiddleware, acceptOrRejectApplication);
router.put('/set-taken', authMiddleware, setJobTaken);
router.delete('/delete-job', authMiddleware, deleteJob);


module.exports = router;