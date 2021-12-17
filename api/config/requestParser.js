module.exports = function(server){
    const Utils = require('../src/services/Utils')
    server.use(function(req, res, next) {
        const start = process.hrtime();
        const requestUrl = req.url;
        res.on('finish', () => {
            const duration = Utils.getDurationInMilliseconds(start);
            const request = '['+req.method+' '+res.statusCode+' | '+Utils.dateFormater(new Date(), "dd/mm/yyyy hh:MM:ss")+'] Request : '+requestUrl+' '+duration.toLocaleString()+' ms';
            console.log(request);
        });
        next();
    })
}

