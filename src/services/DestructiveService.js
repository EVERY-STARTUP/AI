"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DestructiveService = void 0;
const sequelize_1 = require("sequelize");
const destructiveModel_1 = require("../models/destructiveModel");
const pagination_1 = require("../utilities/pagination");
const response_1 = require("../utilities/response");
class DestructiveService {
    static async create(payload) {
        const result = await destructiveModel_1.DestructiveModel.create(payload);
        return result;
    }
    static async getByDate(date) {
        const start = new Date(`${date}T00:00:00.000Z`);
        const end = new Date(`${date}T23:59:59.999Z`);
        const data = await destructiveModel_1.DestructiveModel.findAll({
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
        const result = await destructiveModel_1.DestructiveModel.findAndCountAll({
            where: {
                deleted: 0
            },
            order: [['destructiveId', 'desc']],
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
exports.DestructiveService = DestructiveService;
