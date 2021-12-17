exports.dateFormater = function(date, format){
    const map = {
        mm: date.getMonth()+1,
        dd: date.getDate(),
        yyyy: date.getFullYear(),
        hh: date.getHours(),
        MM: date.getMinutes(),
        ss: date.getSeconds()
    }

    return format.replace(/mm|dd|yyyy|hh|MM|ss/gi, matched => map[matched])
}

exports.getDurationInMilliseconds = function (start) {
    const NS_PER_SEC = 1e9;
    const NS_TO_MS = 1e6;
    const diff = process.hrtime(start);
    return (diff[0] * NS_PER_SEC + diff[1]) / NS_TO_MS
}