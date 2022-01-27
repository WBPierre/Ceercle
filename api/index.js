require('dotenv').config({ path: `./.env.${process.env.NODE_ENV}` });

global.__basedir = __dirname;

const initUtils = require('./config/utils');
const server = require('./config/server');
const http = require('http');
const https = require('https');
const fs = require('fs');
require('./config/database');
require('./config/scheduler');

if(process.env.NODE_ENV === "development"){
    http.createServer(server).listen(8080, function () {
        console.log('HTTP server running on 8080');
    });
}else{
    http.createServer(server).listen(80, function () {
        console.log('HTTP server running on 80');
    });
    initUtils.checkFileExist('./letsencrypt/www/live/api.ceercle.io/fullchain.pem').then(() => {
        const options = {
            cert: fs.readFileSync('./letsencrypt/www/live/api.ceercle.io/fullchain.pem'),
            key: fs.readFileSync('./letsencrypt/www/live/api.ceercle.io/privkey.pem')
        };
        https.createServer(options, server).listen(443, function () {
            console.log('HTTPS server running on 443');
        });
    });
}

// To remove
server.set('views', __dirname + '/views');
server.set('view engine', 'html');
server.engine('html', require('hogan-express'))


