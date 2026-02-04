"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchProductivity = void 0;
const http_status_codes_1 = require("http-status-codes");
const ProductivityService_1 = require("../../services/ProductivityService");
const fetchProductivity = async (req, res, next) => {
    try {
        const { pagination = 'true', page = 0, size = 10, search = '' } = req.query;
        const result = await ProductivityService_1.ProductivityService.getAll({
            pagination: pagination === 'true',
            queryPage: Number(page),
            querySize: Number(size),
            search: String(search).trim()
        });
        return res.status(http_status_codes_1.StatusCodes.OK).json(result);
    }
    catch (error) {
        next(error);
    }
};
exports.fetchProductivity = fetchProductivity;
