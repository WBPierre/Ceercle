const OfficeElement = require('../../models/OfficeElement');
const { param, body } = require("express-validator");
const Utils = require("../../services/Utils");
const OfficeElementRepository = require('../../repositories/OfficeElementRepository');
const uploadBackground = require("../../middlewares/UploadRoomBackgroundMiddleware");
const fs = require('fs')

exports.getOfficeElements = async function (req, res, next) {
    const id = req.params.id;
    let result = await OfficeElementRepository.findAllByOfficeId(id, [['id', 'ASC']]);

    let arr = [];
    for (let i = 0; i < result.length; i++) {
        let obj = {
            id: result[i].id,
            name: result[i].name,
            type: result[i].type,
            color: result[i].color,
            capacity: result[i].capacity,
            parentId: result[i].parentId,
            officeId: result[i].officeId,
            background: result[i].backgroundPath,
            size: result[i].size,
            x: result[i].x,
            y: result[i].y,
            elements: []
        };
        arr.push(obj);
    }
    const array = Utils.generateTree(arr);
    res.json(array);
}
exports.deleteOldDesks = async function (req, res, next) {
    const oldOfficeElements = await OfficeElementRepository.findAllByParentId(req.params.parentId);
    if(oldOfficeElements.length !== 0){
        for(let i = 0; i < oldOfficeElements.length; i++){
            await OfficeElementRepository.deleteById(oldOfficeElements[i].id);
        }
    }
    res.status(200);
    res.send();
}


exports.createOfficeElement = async function (req, res, next) {
    const result = await OfficeElement.create(req.body)
    res.json(result);
}

exports.uploadBackground = async function (req, res, next) {
    try {
        await uploadBackground(req, res);

        if (req.file == undefined) {
            return res.status(400).send({ message: "Please upload a file!" });
        }
        const url =
            process.env.STORAGE_PROTOCOL +
            "://" +
            process.env.STORAGE_HOST +
            ":" +
            process.env.STORAGE_PORT +
            "/public/assets/room/" +
            req.file.filename;
        await OfficeElementRepository.findOneById(req.params.id).then(async (record) => {
            if(!record){
                res.status(404);
                res.send();
            }else{
                if(record.backgroundPath !== null){
                    let oldPath = record.backgroundPath.split("/");
                    let old = oldPath[oldPath.length - 1];
                    console.log(old);
                    try {
                        fs.unlinkSync(__basedir+"/public/assets/room/"+old);
                    } catch(err) {
                        console.error(err)
                    }
                }
                await record.update({backgroundPath: url})
                res.status(200).send({ path: url });
            }
        });
    } catch (err) {
        res.status(403).send({
            message: `Could not upload the file ${err}`,
        });
    }
};


exports.updateOfficeElement = async function (req, res, next) {
    await OfficeElementRepository.findOneById(req.body.id)
        .then((record) => {
            if (!record) {
                res.status(404);
                res.send();
            } else {
                record.update(req.body).then((updated) => {
                    res.json(updated);
                })
            }
        });
}

exports.deleteOfficeElement = async function (req, res, next) {
    await OfficeElementRepository.deleteById(req.body.id);
    res.sendStatus(200);
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
                body('parentId', 'parentId is not a number').isNumeric().optional({ nullable: true }),
                body('name', 'name doesn\'t exist').exists(),
                body('name', 'name is not a string').isString(),
                body('type', 'type doesn\'t exist').exists(),
                body('type', 'type is not a number').isNumeric(),
                body('color', 'color is not a string').isString().optional({ nullable: true }),
                body('capacity', 'capacity is not a string').isNumeric(),
                body('maxCapacity', 'maxCapacity is not a string').isNumeric(),
                body('size', 'size is not a number').isNumeric().optional({ nullable: true }),
                body('x', 'x is not a string').isNumeric(),
                body('y', 'y is not a string').isNumeric(),
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
        case 'uploadBackground': {
            return [
                param('id', 'id doesn\'t exist').exists(),
                param('id', 'id is not a number').isNumeric(),
            ]
        }
        case 'deleteOldDesks': {
            return [
                param('parentId', 'parentId doesn\'t exist').exists(),
                param('parentId', 'parentId is not a number').isNumeric(),
            ]
        }
    }
}