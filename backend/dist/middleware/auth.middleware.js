"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const auth_service_1 = require("../service/auth.service");
async function authMiddleware(request, reply, done) {
    const token = request.headers.authorization;
    if (!token) {
        reply.status(401).send({ error: 'No token provided' });
        return;
    }
    try {
        await (0, auth_service_1.verifyToken)(token);
        done();
    }
    catch (error) {
        reply.status(401).send({ error: 'Invalid token' });
    }
}
exports.authMiddleware = authMiddleware;
