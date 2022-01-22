const fs = require('fs');

const profileDir = __basedir+'/public/assets/profile/';
const bannerDir = __basedir+'/public/assets/banner/';

exports.verifyFolderImplementation = () => {
    if (!fs.existsSync(profileDir)) {
        fs.mkdirSync(profileDir, { recursive: true });
    }
    if (!fs.existsSync(bannerDir)) {
        fs.mkdirSync(bannerDir, { recursive: true });
    }
}