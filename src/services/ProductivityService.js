"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductivityService = void 0;
const sequelize_1 = require("sequelize");
const productivityModel_1 = require("../models/productivityModel");
const response_1 = require("../utilities/response");
const pagination_1 = require("../utilities/pagination");
class ProductivityService {
    static async create(payload) {
        const result = await productivityModel_1.ProductivityModel.create(payload);
        return result;
    }
    static async getByDate(date) {
        const start = new Date(`${date}T00:00:00.000Z`);
        const end = new Date(`${date}T23:59:59.999Z`);
        const data = await productivityModel_1.ProductivityModel.findAll({
            where: {
                createdAt: {
                    [sequelize_1.Op.gte]: start,
                    [sequelize_1.Op.lte]: end
                }
            }
        });
        return data;
    }
    static async getAll({ pagination, queryPage, querySize, search }) {
        const page = new pagination_1.Pagination(Number(queryPage) || 0, Number(querySize) || 10);
        const whereClause = {
            deleted: 0
        };
        if (search) {
            whereClause[sequelize_1.Op.and] = sequelize_1.Sequelize.literal(`
      JSON_SEARCH(
        LOWER(JSON_UNQUOTE(JSON_EXTRACT(productivity_data, '$'))),
        'all',
        LOWER('%${search}%')
      ) IS NOT NULL
    `);
        }
        const result = await productivityModel_1.ProductivityModel.findAndCountAll({
            where: whereClause,
            order: [['productivityId', 'desc']],
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
exports.ProductivityService = ProductivityService;
