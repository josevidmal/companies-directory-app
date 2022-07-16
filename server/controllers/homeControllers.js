const Company = require('../models/Company');

module.exports = {
    async getAllCompanies(req, res) {
        try {
            const companyData = await Company.findAll();
            return res.status(200).json(companyData);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
};