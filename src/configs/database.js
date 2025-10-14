"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeDB = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const sequelize_1 = require("sequelize");
const index_1 = require("./index");
dotenv_1.default.config();
const dataBaseConfig = index_1.appConfigs.dataBase.development;
exports.initializeDB = new sequelize_1.Sequelize(dataBaseConfig);
