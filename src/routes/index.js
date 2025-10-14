"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const logs_1 = __importDefault(require("../logs"));
const requestHandler_1 = require("../utilities/requestHandler");
const response_1 = require("../utilities/response");
const http_status_codes_1 = require("http-status-codes");
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_1 = __importDefault(require("../configs/swagger"));
const registry_1 = __importDefault(require("./registry"));
const routers = (0, express_1.Router)();
routers.use('/api/v1/', registry_1.default.AppCheckRoutes);
routers.use('/api/v1/', registry_1.default.FetchDataRoutes);
routers.use('/api/v1/auth', registry_1.default.AuthRoutes);
routers.use('/api/v1/webhooks', registry_1.default.WebhookRoutes);
routers.use('/docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_1.default));
routers.use((req, res) => {
    const message = `Route not found!`;
    logs_1.default.warn(message);
    const response = response_1.ResponseData.error({ message });
    return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json(response);
});
routers.use((serverError, req, res, _next) => {
    logs_1.default.error(serverError.stack);
    return (0, requestHandler_1.handleServerError)(res, serverError);
});
exports.default = routers;
