"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const http_status_codes_1 = require("http-status-codes");
const response_1 = require("../../utilities/response");
const requestHandler_1 = require("../../utilities/requestHandler");
const authSchema_1 = require("../../schemas/authSchema");
const UserServices_1 = require("../../services/UserServices");
const login = async (req, res, next) => {
    const { error, value } = (0, requestHandler_1.validateRequest)(authSchema_1.authLoginSchema, req.body);
    if (error)
        return (0, requestHandler_1.handleValidationError)(res, error);
    try {
        const result = await UserServices_1.UserServices.login(value);
        return res.status(http_status_codes_1.StatusCodes.OK).json(response_1.ResponseData.success({ data: result }));
    }
    catch (err) {
        next(err);
    }
};
exports.login = login;
