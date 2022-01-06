const OfficeElement = require('../models/OfficeElement');
const {validationResult, param, body} = require("express-validator");
const Team = require("../models/Team");
const Utils = require("../services/Utils");


exports.getOfficeElements = async function(req, res, next){
    try {
        const errors = validationResult(req);
        console.log(errors);
        if (!errors.isEmpty()) {
            res.status(422).json({errors: errors.array()});
        }
        const id = req.params.id;
        let result = await OfficeElement.findAll({
            where:{
                officeId: id
            },
            order:[['id', 'ASC']]
        });

        let arr = [];
        for(let i = 0; i < result.length; i++){
            let obj = {
                id: result[i].id,
                name: result[i].name,
                type: result[i].type,
                color: result[i].color,
                capacity: result[i].capacity,
                parentId: result[i].parentId,
                officeId: result[i].officeId,
                elements: []
            };
            arr.push(obj);
        }
        const array = Utils.generateTree(arr);
        /*
        while(result.length > 0){
            for(let i = 0; i < result.length; i++){
                let obj = {
                    id: result[i].id,
                    name: result[i].name,
                    type: result[i].type,
                    color: result[i].color,
                    capacity: result[i].capacity,
                    parentId: result[i].parentId,
                    officeId: result[i].officeId,
                    elements: []
                };
                if(result[i].parentId === null){
                    arr.push(obj);
                    result.slice(i, 1);
                }else{
                    for(let j = 0; j < arr.length; j++){
                        if(arr[j].id === obj.parentId){
                            arr[j]['elements'].push(obj);
                            result.slice(i,1);
                            break;
                        }
                    }
                }
            }
        }*/
        res.json(array);
    } catch(err) {
        return next(err)
    }
}

exports.createOfficeElement = async function (req, res, next){
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.status(422).json({ errors: errors.array() });
        }
        const result = await OfficeElement.create(req.body)
        res.json(result);
    } catch(err) {
        return next(err)
    }
}

exports.updateOfficeElement = async function (req, res, next) {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.status(422).json({ errors: errors.array() });
            return;
        }
        await OfficeElement.findOne(
            {
                where:{
                    id:req.body.id
                }
            }).then((record) => {
            if (!record) {
                res.status(404);
                res.send();
            }else{
                record.update(req.body).then((updated) => {
                    res.json(updated);
                })
            }
        });
    } catch(err) {
        return next(err)
    }
}

exports.deleteOfficeElement = async function(req, res, next){
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.status(422).json({ errors: errors.array() });
            return;
        }
        await OfficeElement.destroy(
            {
                where:{
                    id:req.body.id
                }
            });
        res.sendStatus(200);
    } catch(err) {
        return next(err)
    }
}

exports.validate = (method) => {
    switch (method) {
        case 'getOfficeElements': {
            return [
                param('id', 'id doesn\'t exist').exists(),
                param('id', 'id is not a number').isNumeric()
            ]
        }
        case 'createOfficeElement': {
            return [
                body('parentId', 'parentId doesn\'t exist').exists(),
                body('parentId', 'parentId is not a number').isNumeric().optional({nullable:true}),
                body('name', 'name doesn\'t exist').exists(),
                body('name', 'name is not a string').isString(),
                body('type', 'type doesn\'t exist').exists(),
                body('type', 'type is not a number').isNumeric(),
                body('color', 'color is not a string').isString(),
                body('capacity', 'capacity is not a string').isNumeric(),
            ]
        }
        case 'updateOfficeElement': {
            return [
                body('id', 'id doesn\'t exist').exists(),
                body('id', 'id is not a number').isNumeric(),
                body('name', 'name is not a string').isString(),
                body('type', 'type is not a number').isNumeric(),
                body('color', 'color is not a string').isString(),
                body('capacity', 'capacity is not a string').isNumeric(),
            ]
        }
        case 'deleteOfficeElement': {
            return [
                body('id', 'id doesn\'t exist').exists(),
                body('id', 'id is not a number').isNumeric(),
            ]
        }
    }
}