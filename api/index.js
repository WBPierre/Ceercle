import server from "./config/server.js";
import sequelize from "./config/database.js";

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
