"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PeriodicModel = void 0;
const sequelize_1 = require("sequelize");
const BaseModelFields_1 = require("../entities/BaseModelFields");
const database_1 = require("../configs/database");
exports.PeriodicModel = database_1.initializeDB.define('Periodic', {
    ...BaseModelFields_1.BaseModelFields,
    periodicId: {
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    periodicName: {
        type: sequelize_1.DataTypes.STRING(255),
        allowNull: false
    },
    periodicCategory: {
        type: sequelize_1.DataTypes.ENUM('TINGGI_TANAMAN', 'JUMLAH_DAUN', 'DIAMETER_BATANG', 'SPAD', 'UMUR_BERBUNGA', 'PANJANG_BUNGA_JANTAN', 'PANJANG_DAUN', 'LEBAR_DAUN'),
        allowNull: false
    },
    periodicData: {
        type: sequelize_1.DataTypes.JSON,
        allowNull: false
    }
}, {
    tableName: 'periodics',
    timestamps: true,
    paranoid: true,
    underscored: true,
    freezeTableName: true,
    engine: 'InnoDB'
});
