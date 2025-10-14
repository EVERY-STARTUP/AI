"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductivityModel = void 0;
const sequelize_1 = require("sequelize");
const BaseModelFields_1 = require("../entities/BaseModelFields");
const database_1 = require("../configs/database");
exports.ProductivityModel = database_1.initializeDB.define('productivity', {
    ...BaseModelFields_1.BaseModelFields,
    productivityId: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    productivityData: {
        type: sequelize_1.DataTypes.JSON,
        allowNull: false
    }
}, {
    tableName: 'productivities',
    timestamps: true,
    paranoid: true,
    underscored: true,
    freezeTableName: true,
    engine: 'InnoDB'
});
