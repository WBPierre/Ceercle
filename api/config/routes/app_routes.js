module.exports = function(server) {
    const UserRoutes = require('./app/UserRoutes');
    const ContactRoutes = require('./app/ContactRoutes');
    const CompanyRoutes = require('./app/CompanyRoutes');
    const AuthRoutes = require('./app/AuthRoutes');
    const TimeSheetRoutes = require('./app/TimeSheetRoutes');
    const TeamRoutes = require('./app/TeamRoutes');
    const OfficeRoutes = require('./app/OfficeRoutes');
    const OfficeElementRoutes = require('./app/OfficeElementRoutes');
    const OfficeBookingRoutes = require('./app/OfficeBookingRoutes');
    const MoodRoutes = require('./app/MoodRoutes');
    const ExternalRoutes = require('./app/ExternalRoutes');

    const baseUrl = "/api"

    server.use(baseUrl+"/users", UserRoutes);
    server.use(baseUrl+"/contact", ContactRoutes);
    server.use(baseUrl+"/company", CompanyRoutes);
    server.use(baseUrl+"/team", TeamRoutes);
    server.use(baseUrl+"/auth", AuthRoutes);
    server.use(baseUrl+"/time", TimeSheetRoutes);
    server.use(baseUrl+"/office", OfficeRoutes);
    server.use(baseUrl+"/officeElement", OfficeElementRoutes);
    server.use(baseUrl+"/officeBooking", OfficeBookingRoutes);
    server.use(baseUrl+"/mood", MoodRoutes);
    server.use(baseUrl+"/external", ExternalRoutes);
}