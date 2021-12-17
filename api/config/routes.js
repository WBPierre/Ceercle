module.exports = function(server) {
    const UserRoutes = require('./routes/UserRoutes');
    const ContactRoutes = require('./routes/ContactRoutes');
    const CompanyRoutes = require('./routes/CompanyRoutes');
    const AuthRoutes = require('./routes/AuthRoutes');

    server.use("/users", UserRoutes);
    server.use("/contact", ContactRoutes);
    server.use("/company", CompanyRoutes);
    server.use("/auth", AuthRoutes);
}