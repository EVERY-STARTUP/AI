"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const remove_1 = require("../controllers/remove");
const RemoveDataRoutes = (0, express_1.Router)();
RemoveDataRoutes.delete('/periodics/:periodicId', remove_1.RemoveController.removePeriodic);
RemoveDataRoutes.delete('/destructives/:destructiveId', remove_1.RemoveController.removeDestructive);
RemoveDataRoutes.delete('/productivities/:productivityId', remove_1.RemoveController.removeProductivity);
exports.default = RemoveDataRoutes;
