"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const webhook_1 = require("../controllers/webhook");
const WebhookRoutes = (0, express_1.Router)();
WebhookRoutes.post('/', webhook_1.WebhookController.message);
exports.default = WebhookRoutes;
