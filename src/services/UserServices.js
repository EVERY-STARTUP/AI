"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserServices = void 0;
const http_status_codes_1 = require("http-status-codes");
const userModel_1 = require("../models/userModel");
const jwt_1 = require("../utilities/jwt");
const ServiceErrorHandler_1 = require("./ServiceErrorHandler");
const scurePassword_1 = require("../utilities/scurePassword");
class UserServices {
    static async login({ userName, userPassword }) {
        const user = await userModel_1.UserModel.findOne({
            where: {
                deleted: 0,
                userName,
                userRole: 'admin'
            }
        });
        if (!user) {
            throw new ServiceErrorHandler_1.ServiceErrorHandler('UserServices: Account not found. Please register first!', http_status_codes_1.StatusCodes.NOT_FOUND);
        }
        const isPasswordValid = (0, scurePassword_1.hashPassword)(userPassword) === user.userPassword;
        if (!isPasswordValid) {
            throw new ServiceErrorHandler_1.ServiceErrorHandler('UserServices: Invalid whatsapp number and password combination!', http_status_codes_1.StatusCodes.UNAUTHORIZED);
        }
        const accessToken = (0, jwt_1.generateAccessToken)({
            userId: user.userId,
            userRole: user.userRole
        });
        return { accessToken };
    }
}
exports.UserServices = UserServices;
