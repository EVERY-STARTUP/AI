"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchDestructive = void 0;
const http_status_codes_1 = require("http-status-codes");
const DestructiveService_1 = require("../../services/DestructiveService");
const fetchDestructive = async (req, res, next) => {
    try {
        const result = await DestructiveService_1.DestructiveService.getAll({
            pagination: req.query.pagination === 'true',
            queryPage: req.query.queryPage + '' || '0',
            querySize: req.query.querySize + '' || '10'
        });
        return res.status(http_status_codes_1.StatusCodes.OK).json(result);
    }
    catch (error) {
        next(error);
    }
};
exports.fetchDestructive = fetchDestructive;
