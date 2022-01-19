require('dotenv').config();
const server = require('./config/server');
const db = require('./config/database');

global.__basedir = __dirname;

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// To remove
server.set('views', __dirname + '/views');
server.set('view engine', 'html');
server.engine('html', require('hogan-express'))


