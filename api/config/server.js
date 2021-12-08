import bodyParser from "body-parser";
import express from "express";
import UserRoutes from "./routes/UserRoutes.js";
import ContactRoutes from "./routes/ContactRoutes.js";

const server = express()

server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());

UserRoutes(server);
ContactRoutes(server);

export default server;