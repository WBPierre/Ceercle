module.exports = function(server) {
    const UserRoutes = require('./routes/UserRoutes');
    const ContactRoutes = require('./routes/ContactRoutes');
    const CompanyRoutes = require('./routes/CompanyRoutes');
    const AuthRoutes = require('./routes/AuthRoutes');
    const TimeSheetRoutes = require('./routes/TimeSheetRoutes');

    const baseUrl = "/api"

    server.use(baseUrl+"/users", UserRoutes);
    server.use(baseUrl+"/contact", ContactRoutes);
    server.use(baseUrl+"/company", CompanyRoutes);
    server.use(baseUrl+"/auth", AuthRoutes);
    server.use(baseUrl+"/time", TimeSheetRoutes);
}