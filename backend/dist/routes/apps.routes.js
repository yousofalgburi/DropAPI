"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appsRoutes = void 0;
const apps_controller_1 = require("../controllers/apps.controller");
const auth_middleware_1 = require("../middleware/auth.middleware");
async function appsRoutes(server) {
    server.post('/apps', { preHandler: [auth_middleware_1.authMiddleware] }, apps_controller_1.createApp);
}
exports.appsRoutes = appsRoutes;
