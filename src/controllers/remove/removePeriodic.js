"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removePeriodic = void 0;
const http_status_codes_1 = require("http-status-codes");
const response_1 = require("../../utilities/response");
const requestHandler_1 = require("../../utilities/requestHandler");
const logs_1 = __importDefault(require("../../logs"));
const periodicModel_1 = require("../../models/periodicModel");
const removePeriodic = async (req, res) => {
    try {
        const result = await periodicModel_1.PeriodicModel.findOne({
            where: {
                deleted: 0,
                periodicId: Number(req?.params?.periodicId)
            }
        });
        if (result == null) {
            const message = `Periodic not found with ID: ${req?.params?.periodicId}`;
            logs_1.default.warn(message);
            return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json(response_1.ResponseData.error({ message }));
        }
        result.deleted = true;
        await result.save();
        const response = response_1.ResponseData.success({
            message: 'Periodic deleted successfully'
        });
        logs_1.default.info('Periodic deleted successfully');
        return res.status(http_status_codes_1.StatusCodes.OK).json(response);
    }
    catch (serverError) {
        return (0, requestHandler_1.handleServerError)(res, serverError);
    }
};
exports.removePeriodic = removePeriodic;
