const {validationResult} = require("express-validator");

exports.verifyErrors = function(req, res, next) {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.status(422).json({ errors: errors.array() });
            return;
        }
        next();
    } catch (err) {
        return res.status(406).json({ errors: err });
    }
}