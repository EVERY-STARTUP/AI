"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchDataController = void 0;
const fetchDestructive_1 = require("./fetchDestructive");
const fetchPeriodics_1 = require("./fetchPeriodics");
const fetchProductivity_1 = require("./fetchProductivity");
exports.FetchDataController = {
    fetchPeriodic: fetchPeriodics_1.fetchPeriodic,
    fetchDestructive: fetchDestructive_1.fetchDestructive,
    fetchProductivity: fetchProductivity_1.fetchProductivity
};
