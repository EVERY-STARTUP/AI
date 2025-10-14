"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const appCheck_1 = require("../controllers/appCheck");
const AppCheckRoutes = (0, express_1.Router)();
AppCheckRoutes.get('/', appCheck_1.AppChekController.mainApp);
AppCheckRoutes.get('/helth', appCheck_1.AppChekController.healthCheck);
AppCheckRoutes.get('/info', appCheck_1.AppChekController.appInfo);
exports.default = AppCheckRoutes;
