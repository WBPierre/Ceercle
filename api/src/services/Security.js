const bcrypt = require('bcrypt');

exports.hashPassword = async function(password) {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}

exports.verifyPassword = async function(password, hash){
    return await bcrypt.compare(password, hash);
}