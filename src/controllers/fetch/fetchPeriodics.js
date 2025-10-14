"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchPeriodic = void 0;
const http_status_codes_1 = require("http-status-codes");
const PeriodicService_1 = require("../../services/PeriodicService");
const fetchPeriodic = async (req, res, next) => {
    try {
        const result = await PeriodicService_1.PeriodicService.getAll({
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
exports.fetchPeriodic = fetchPeriodic;
