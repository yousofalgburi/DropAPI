"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApp = void 0;
const apps_service_1 = require("../service/apps.service");
async function createApp(request, reply) {
    const { name, identifier, description, userId } = request.body;
    if (!name || !identifier || !description) {
        reply.status(400).send({ error: 'Missing required fields' });
        return;
    }
    try {
        const app = await apps_service_1.appsService.createApp({ name, identifier, description, userId: userId });
        reply.status(201).send(app);
    }
    catch (error) {
        reply.status(500).send({ error: 'Failed to create app' });
    }
}
exports.createApp = createApp;
