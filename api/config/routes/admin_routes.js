module.exports = function(server) {
    const CompanyRoutes = require('./admin/CompanyRoutes');
    const AuthRoutes = require('./admin/AuthRoutes');

    const baseUrl = "/api/admin"

    server.use(baseUrl+"/company", CompanyRoutes);
    server.use(baseUrl+"/auth", AuthRoutes);
}