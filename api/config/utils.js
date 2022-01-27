const fs = require("fs");
exports.isSecure = (req) => {
    if (req.headers['x-forwarded-proto']) {
        return req.headers['x-forwarded-proto'] === 'https';
    }
    return req.secure;
};

exports.checkFileExist = async (path, timeout = 2000) => {
    return await new Promise((resolve, reject) => {
        const intervalObj = setInterval(function() {

            const file = path;
            const fileExists = fs.existsSync(file);

            console.log('Checking for: ', file);
            console.log('Exists: ', fileExists);

            if (fileExists) {
                clearInterval(intervalObj);
                resolve(fileExists);
            }
        }, timeout);
    });
}