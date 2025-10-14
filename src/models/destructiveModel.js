"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DestructiveModel = void 0;
const sequelize_1 = require("sequelize");
const BaseModelFields_1 = require("../entities/BaseModelFields");
const database_1 = require("../configs/database");
exports.DestructiveModel = database_1.initializeDB.define('Destructive', {
    ...BaseModelFields_1.BaseModelFields,
    destructiveId: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    destructiveData: {
        type: sequelize_1.DataTypes.JSON,
        allowNull: false
    }
}, {
    tableName: 'destructives',
    timestamps: true,
    paranoid: true,
    underscored: true,
    freezeTableName: true,
    engine: 'InnoDB'
});
