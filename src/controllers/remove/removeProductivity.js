"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeProductivity = void 0;
const http_status_codes_1 = require("http-status-codes");
const response_1 = require("../../utilities/response");
const requestHandler_1 = require("../../utilities/requestHandler");
const logs_1 = __importDefault(require("../../logs"));
const productivityModel_1 = require("../../models/productivityModel");
const removeProductivity = async (req, res) => {
    try {
        const result = await productivityModel_1.ProductivityModel.findOne({
            where: {
                deleted: 0,
                productivityId: Number(req?.params?.productivityId)
            }
        });
        if (result == null) {
            const message = `Productivity not found with ID: ${req?.params?.productivityId}`;
            logs_1.default.warn(message);
            return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json(response_1.ResponseData.error({ message }));
        }
        result.deleted = true;
        await result.save();
        const response = response_1.ResponseData.success({
            message: 'Productivity deleted successfully'
        });
        logs_1.default.info('Productivity deleted successfully');
        return res.status(http_status_codes_1.StatusCodes.OK).json(response);
    }
    catch (serverError) {
        return (0, requestHandler_1.handleServerError)(res, serverError);
    }
};
exports.removeProductivity = removeProductivity;
