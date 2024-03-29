"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.appsService = void 0;
const db_1 = __importDefault(require("../lib/db"));
const apps_model_1 = require("../model/apps.model");
exports.appsService = {
    createApp: async (appData) => {
        const result = await db_1.default.insert(apps_model_1.apps).values(appData).returning();
        return result;
    }
};
