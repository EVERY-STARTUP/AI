"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveController = void 0;
const removePeriodic_1 = require("./removePeriodic");
const removeDestructive_1 = require("./removeDestructive");
const removeProductivity_1 = require("./removeProductivity");
exports.RemoveController = {
    removePeriodic: removePeriodic_1.removePeriodic,
    removeDestructive: removeDestructive_1.removeDestructive,
    removeProductivity: removeProductivity_1.removeProductivity
};
