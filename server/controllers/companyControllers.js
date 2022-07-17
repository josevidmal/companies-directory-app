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
    async addCompany(req, res) {
        try {
            const companyData = await Company.create(req.body);
            return res.status(200).json(companyData);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
    async updateCompany(req, res) {
        try {
            const companyData = await Company.update(req.body, {
                where: {
                    id: req.params.id,
                },
            });
            return res.status(200).json(companyData);
        } catch (err) {
            console.log(err);
            return res.status(500).json(err);
        }
    },
    async deleteCompany(req, res) {
        try {
            const companyData = await Company.destroy({
                where: {
                    id: req.params.id,
                },
            });
        
            if (!companyData) {
                res.status(404).json({ message: "There is not a Company with the provided id!" });
                return;
            }

            return res.status(200).json(companyData);
        } catch (err) {
            return res.status(500).json(err);
        }
    },
};