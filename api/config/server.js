const express = require('express');
const bodyParser = require('body-parser');
const requestParser = require('./requestParser');
const Routes = require('./routes');
const {initDatabase} = require("./init/database");
const {verifyDatabase} = require('./database');
const {verifyFolderImplementation} = require('./init/upload');
const {generateDemoData} = require('./init/demo');
const {isSecure} = require('./utils');


const server = express()
server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());

server.use('/public', express.static('public'));

async function init() {
    if(await verifyDatabase()){
        await initDatabase()
    }
}
init();


requestParser(server);

server.use("/.well-known/acme-challenge", express.static("letsencrypt/conf/.well-known/acme-challenge"));
server.get('*', function(req, res, next) {
    if (process.env.NODE_ENV !== 'development' && !isSecure(req)) {
        res.redirect(`https://${req.headers.host}${req.url}`);
    } else {
        next();
    }
})

Routes(server);

verifyFolderImplementation();

async function DemoData() {
    await generateDemoData();
}
DemoData();


module.exports = server;