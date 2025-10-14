"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const fetch_1 = require("../controllers/fetch");
const FetchDataRoutes = (0, express_1.Router)();
FetchDataRoutes.get('/periodics', fetch_1.FetchDataController.fetchPeriodic);
FetchDataRoutes.get('/destructives', fetch_1.FetchDataController.fetchDestructive);
FetchDataRoutes.get('/productivities', fetch_1.FetchDataController.fetchProductivity);
exports.default = FetchDataRoutes;
