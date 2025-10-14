"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.message = void 0;
const http_status_codes_1 = require("http-status-codes");
const WebhookServices_1 = require("../../services/WebhookServices");
const message = async (req, res, next) => {
    try {
        const result = await WebhookServices_1.WebhookServices.processWebhook(req.body);
        return res.status(http_status_codes_1.StatusCodes.OK).json(result);
    }
    catch (error) {
        next(error);
    }
};
exports.message = message;
