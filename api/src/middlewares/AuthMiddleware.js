const jwt = require('jsonwebtoken');
const Company = require("../models/Company");

exports.isUserAuthenticated = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader) {
        return res.status(403).json({
            message: 'FORBIDDEN'
        })
    } else {
        jwt.verify(authHeader.split(' ')[1], process.env.JWT_SECRET, (err, authData) => {
            if(err) return res.status(403).json(err);
            res.locals.auth=authData
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
        jwt.verify(authHeader.split(' ')[1], process.env.JWT_SECRET, (err, authData) => {
            if(err) return res.status(403).json(err);
            if(!authData.user.isAdmin) return res.sendStatus(403)
            res.locals.auth=authData
            next();
        });
    }
}

exports.isSpaceCorner = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader) {
        return res.status(403).json({
            message: 'FORBIDDEN'
        })
    } else {
        jwt.verify(authHeader.split(' ')[1], process.env.JWT_SECRET, async (err, authData) => {
            if(err) return res.status(403).json(err);
            await Company.findOne({
                where:{
                    id: authData.user.companyId
                }
            }).then(async (companyRecord) => {
                if(!companyRecord){
                    res.status(403);
                    res.send();
                }else {
                    if (companyRecord.name !== "SpaceCorner") {
                        res.status(403);
                        res.send();
                    } else {
                        res.locals.auth = authData
                        next();
                    }
                }
            });
        });
    }
}