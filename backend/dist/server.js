"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const apps_routes_1 = require("./routes/apps.routes");
const server = (0, fastify_1.default)();
server.register(apps_routes_1.appsRoutes);
const start = async () => {
    try {
        await server.listen({ port: 3000 });
        console.log(`Server listening on port 3000`);
    }
    catch (err) {
        console.error(err);
        process.exit(1);
    }
};
start();
