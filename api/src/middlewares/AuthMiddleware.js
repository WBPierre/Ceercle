const jwt = require('jsonwebtoken');
const config = require('../../config/secrets');

exports.isUserAuthenticated = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader) {
        return res.status(403).json({
            message: 'FORBIDDEN'
        })
    } else {
        jwt.verify(authHeader.split(' ')[1], config.secrets.jwt_key, (err, authData) => {
            if(err) return res.status(403).json(err);
            res.locals.auth={
                id:authData
            }
            next();
        });
    }
}

exports.isAdminUser = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader) {
        return res.status(403).json({
            message: 'FORBIDDEN'
        })
    } else {
        jwt.verify(authHeader.split(' ')[1], config.secrets.jwt_key, (err, authData) => {
            if(err) return res.status(403).json(err);
            if(!authData.user.isAdmin) return res.sendStatus(403)
            res.locals.auth={
                id:authData
            }
            next();
        });
    }
}