const router = require('express').Router();
const Company = require('../../models/Company');

router.post('/', async (req, res) => {
    try {
        const companyData = await Company.create(req.body);
        res.status(200).json(companyData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const companyData = await Company.update(req.body, {
            where: {
                id: req.params.id,
            },
        });
        res.status(200).json(companyData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', async (req, res) => {
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

        res.status(200).json(companyData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;