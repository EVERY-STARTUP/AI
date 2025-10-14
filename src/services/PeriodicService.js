"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PeriodicService = void 0;
const sequelize_1 = require("sequelize");
const periodicModel_1 = require("../models/periodicModel");
const pagination_1 = require("../utilities/pagination");
const response_1 = require("../utilities/response");
class PeriodicService {
    static async create(payload) {
        const result = await periodicModel_1.PeriodicModel.create(payload);
        return result;
    }
    static async getByDate(date) {
        const start = new Date(`${date}T00:00:00.000Z`);
        const end = new Date(`${date}T23:59:59.999Z`);
        const data = await periodicModel_1.PeriodicModel.findAll({
            where: {
                createdAt: {
                    [sequelize_1.Op.gte]: start,
                    [sequelize_1.Op.lte]: end
                }
            }
        });
        return data;
    }
    static async getAll({ pagination, queryPage, querySize }) {
        const page = new pagination_1.Pagination(Number(queryPage) || 0, Number(querySize) || 10);
        const result = await periodicModel_1.PeriodicModel.findAndCountAll({
            where: {
                deleted: 0
            },
            order: [['periodicId', 'desc']],
            ...(pagination === true && {
                limit: page.limit,
                offset: page.offset
            })
        });
        const response = response_1.ResponseData.success({ data: result });
        response.data = page.formatData(result);
        return response;
    }
}
exports.PeriodicService = PeriodicService;
