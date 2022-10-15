const {Router} = require('express');
const {addJob, acceptOrRejectApplication} = require('../controllers/companies.controller');
const authMiddleware = require('../middlewares/companyAuth.middleware');
const router = Router();

router.post('/addJob', authMiddleware, addJob);
router.post('/application', authMiddleware, acceptOrRejectApplication);


module.exports = router;