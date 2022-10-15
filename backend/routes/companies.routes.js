const {Router} = require('express');
const {addJob} = require('../controllers/companies.controller');
const authMiddleware = require('../middlewares/companyAuth.middleware');
const router = Router();

router.post('/addJob', authMiddleware, addJob);


module.exports = router;