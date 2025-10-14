"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MiddleWares = void 0;
const appRole_1 = require("./appRole");
const authorization_1 = require("./authorization");
const cors_1 = require("./cors");
const errorHandler_1 = require("./errorHandler");
const limiter_1 = require("./limiter");
const morgan_1 = require("./morgan");
exports.MiddleWares = {
    authorization: authorization_1.authorization,
    allowAppRoles: appRole_1.allowAppRoles,
    corsOrigin: cors_1.corsOrigin,
    limiter: limiter_1.limiter,
    loggerMidleWare: morgan_1.loggerMidleWare,
    errorHandler: errorHandler_1.errorHandler
};
