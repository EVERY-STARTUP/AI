"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppChekController = void 0;
const appInfo_1 = require("./appInfo");
const healthChek_1 = require("./healthChek");
const main_1 = require("./main");
exports.AppChekController = {
    appInfo: appInfo_1.appInfo,
    healthCheck: healthChek_1.healthCheck,
    mainApp: main_1.mainApp
};
