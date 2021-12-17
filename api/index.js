const server = require('./config/server');
const db = require('./config/database');

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


