const axios = require("axios");
exports.setSlackStatus = async function(userId, token, lang, type) {
    let status = getStatus(lang, type);
    const resources = {
        token: token,
        user: userId,
        profile: status
    }
    let result = await axios.post('https://slack.com/api/users.profile.set', resources);
    return result.data.ok;
}

exports.unsetSlackStatus = async function(userId, token) {
    let status = {status_text: "", status_emoji:""};
    const resources = {
        token: token,
        user: userId,
        profile: status
    }
    let result = await axios.post('https://slack.com/api/users.profile.set', resources);
    return result.data.ok;
}


function getStatus(lang, type){
    return {
        status_text: getTextStatus(lang, type),
        status_emoji: getEmojiStatus(type),
        status_expiration: 0
    }
}

function getEmojiStatus(type) {
    switch(type){
        case 0:
            return ":white_cercle:";
        case 1:
            return ":office:";
        case 2:
            return ":technologist:";
        case 3:
            return ":train2:";
        case 4:
            return ":palm_tree:";
    }
}

function getTextStatus(lang, type){
    let text= "";
    switch(type){
        case 0:
            break;
        case 1:
            text = lang === "fr" ? "Au bureau" : "At the office"
            break;
        case 2:
            text = lang === "fr" ? "En télétravail" : "Remote"
            break;
        case 3:
            text = lang === "fr" ? "En déplacement" : "Away"
            break;
        case 4:
            text = lang === "fr" ? "Off" : "Off"
            break;
    }
    return text;
}