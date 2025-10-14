"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const sequelize_1 = require("sequelize");
const BaseModelFields_1 = require("../entities/BaseModelFields");
const database_1 = require("../configs/database");
exports.UserModel = database_1.initializeDB.define('Users', {
    ...BaseModelFields_1.BaseModelFields,
    userId: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    userName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    userPassword: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    userRole: {
        type: sequelize_1.DataTypes.ENUM('admin', 'superAdmin', 'user'),
        allowNull: false,
        defaultValue: 'user'
    }
}, {
    tableName: 'users',
    timestamps: true,
    paranoid: true,
    underscored: true,
    freezeTableName: true,
    engine: 'InnoDB'
});
