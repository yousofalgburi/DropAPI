"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_postgres_1 = require("drizzle-orm/node-postgres");
const xata_1 = require("./xata");
const xata = (0, xata_1.getXataClient)();
const db = (0, node_postgres_1.drizzle)(xata);
exports.default = db;
