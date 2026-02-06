"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeDestructive = void 0;
const http_status_codes_1 = require("http-status-codes");
const response_1 = require("../../utilities/response");
const requestHandler_1 = require("../../utilities/requestHandler");
const logs_1 = __importDefault(require("../../logs"));
const destructiveModel_1 = require("../../models/destructiveModel");
const removeDestructive = async (req, res) => {
    try {
        const result = await destructiveModel_1.DestructiveModel.findOne({
            where: {
                deleted: 0,
                destructiveId: Number(req?.params?.destructiveId)
            }
        });
        if (result == null) {
            const message = `Destructive not found with ID: ${req?.params?.destructiveId}`;
            logs_1.default.warn(message);
            return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json(response_1.ResponseData.error({ message }));
        }
        result.deleted = true;
        await result.save();
        const response = response_1.ResponseData.success({
            message: 'Destructive deleted successfully'
        });
        logs_1.default.info('Destructive deleted successfully');
        return res.status(http_status_codes_1.StatusCodes.OK).json(response);
    }
    catch (serverError) {
        return (0, requestHandler_1.handleServerError)(res, serverError);
    }
};
exports.removeDestructive = removeDestructive;
