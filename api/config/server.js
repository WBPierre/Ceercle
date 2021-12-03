import bodyParser from "body-parser";
import express from "express";
import UserRoutes from "./routes/UserRoutes.js";

const server = express()

server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());

UserRoutes(server);

export default server;