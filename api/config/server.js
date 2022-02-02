const express = require('express');
const bodyParser = require('body-parser');
const requestParser = require('./requestParser');
const Routes = require('./routes/app_routes');
const AdminRoutes = require('./routes/admin_routes');
const {initDatabase} = require("./init/database");
const {verifyDatabase} = require('./database');
const {verifyFolderImplementation} = require('./init/upload');

verifyFolderImplementation();
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

Routes(server);
AdminRoutes(server);

module.exports = server;