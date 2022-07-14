const router = require('express').Router();
const Company = require('../models/Company');

router.get('/', async (req, res) => {
    try {
        const companyData = await Company.findAll();
        res.status(200).json(companyData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;