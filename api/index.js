require('dotenv').config({ path: `./.env.${process.env.NODE_ENV}` });

global.__basedir = __dirname;

const initUtils = require('./config/utils');
const server = require('./config/server');
const http = require('http');
const https = require('https');
const fs = require('fs');
require('./config/database');
require('./config/scheduler');

http.createServer(server).listen(8080, function () {
    console.log('HTTP server running on 8080');
});

// To remove
server.set('views', __dirname + '/views');
server.set('view engine', 'html');
server.engine('html', require('hogan-express'))


