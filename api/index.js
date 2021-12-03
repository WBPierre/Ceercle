import server from "./config/server.js";
import db from "./config/database.js";

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
