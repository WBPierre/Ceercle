const OfficeBooking = require("../models/OfficeBooking");
const {validationResult, param, body} = require("express-validator");
const Company = require("../models/Company");


exports.createOfficeBooking = async function(req, res, next) {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.status(422).json({ errors: errors.array() });
            return;
        }
        const officeBooking = await OfficeBooking.create(req.body);
        res.json(officeBooking);
    } catch(err) {
        return next(err)
    }
}