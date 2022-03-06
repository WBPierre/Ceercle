const { param } = require("express-validator");
const OfficeRepository = require('../../repositories/OfficeRepository');
const UserRepository = require('../../repositories/UserRepository');


exports.getOffices = async function (req, res, next) {
    const result = await OfficeRepository.findAllForCompany(res.locals.auth.user.companyId);
    res.json(result);
}

exports.listOffices = async function (req, res, next) {
    const result = await OfficeRepository.findAllForCompany(res.locals.auth.user.companyId, [['name', 'ASC']]);
    res.json(result);
}

exports.validate = (method) => {
    switch (method) {

    }
}