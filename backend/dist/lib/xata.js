"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getXataClient = exports.XataClient = void 0;
const client_1 = require("@xata.io/client");
const tables = [];
const DatabaseClient = (0, client_1.buildClient)();
const defaultOptions = {
    databaseURL: 'https://Yousof-Algburi-s-workspace-4iv5up.us-east-1.xata.sh/db/dropapi'
};
class XataClient extends DatabaseClient {
    constructor(options) {
        super({ ...defaultOptions, ...options }, tables);
    }
}
exports.XataClient = XataClient;
let instance = undefined;
const getXataClient = () => {
    if (instance)
        return instance;
    instance = new XataClient();
    return instance;
};
exports.getXataClient = getXataClient;
