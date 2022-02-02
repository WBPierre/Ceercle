module.exports = function(server) {
    const CompanyRoutes = require('./admin/CompanyRoutes');
    const AuthRoutes = require('./admin/AuthRoutes');
    const OfficeRoutes = require('./admin/OfficeRoutes');
    const OfficeElementRoutes = require('./admin/OfficeElementRoutes');
    const UserRoutes = require('./admin/UserRoutes');

    const baseUrl = "/api/admin"

    server.use(baseUrl+"/company", CompanyRoutes);
    server.use(baseUrl+"/auth", AuthRoutes);
    server.use(baseUrl+"/office", OfficeRoutes);
    server.use(baseUrl+"/officeElement", OfficeElementRoutes);
    server.use(baseUrl+"/users", UserRoutes);
}