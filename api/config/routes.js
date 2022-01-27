const MoodRoutes = require("./routes/MoodRoutes");
module.exports = function(server) {
    const UserRoutes = require('./routes/UserRoutes');
    const ContactRoutes = require('./routes/ContactRoutes');
    const CompanyRoutes = require('./routes/CompanyRoutes');
    const AuthRoutes = require('./routes/AuthRoutes');
    const TimeSheetRoutes = require('./routes/TimeSheetRoutes');
    const TeamRoutes = require('./routes/TeamRoutes');
    const OfficeRoutes = require('./routes/OfficeRoutes');
    const OfficeElementRoutes = require('./routes/OfficeElementRoutes');
    const OfficeBookingRoutes = require('./routes/OfficeBookingRoutes');
    const MoodRoutes = require('./routes/MoodRoutes');
    const ExternalRoutes = require('./routes/ExternalRoutes');

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