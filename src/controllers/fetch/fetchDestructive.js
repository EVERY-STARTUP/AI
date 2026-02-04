"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchDestructive = void 0;
const http_status_codes_1 = require("http-status-codes");
const DestructiveService_1 = require("../../services/DestructiveService");
const fetchDestructive = async (req, res, next) => {
    const { pagination = 'true', page = 0, size = 10, search = '' } = req.query;
    try {
        const result = await DestructiveService_1.DestructiveService.getAll({
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
exports.fetchDestructive = fetchDestructive;
