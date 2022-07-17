const router = require('express').Router();
const {
    getAllCompanies,
    addCompany,
    updateCompany,
    deleteCompany,
} = require('../../controllers/companyControllers');

router.route('/').get(getAllCompanies).post(addCompany);

router.route('/:id').put(updateCompany).delete(deleteCompany);

module.exports = router;