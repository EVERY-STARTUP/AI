"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const http_status_codes_1 = require("http-status-codes");
const ServiceErrorHandler_1 = require("../services/ServiceErrorHandler");
const logs_1 = __importDefault(require("../logs"));
const response_1 = require("../utilities/response");
const errorHandler = (err, req, res) => {
    if (err instanceof ServiceErrorHandler_1.ServiceErrorHandler) {
        return res.status(err.code).json(response_1.ResponseData.error({ message: err.message }));
    }
    logs_1.default.error('Unexpected Error:', err);
    return res
        .status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR)
        .json(response_1.ResponseData.error({ message: 'Internal Server Error' }));
};
exports.errorHandler = errorHandler;
