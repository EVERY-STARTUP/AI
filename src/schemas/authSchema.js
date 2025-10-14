"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePasswordSchema = exports.authRegistrationSchema = exports.authLoginSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.authLoginSchema = joi_1.default.object({
    userWhatsappNumber: joi_1.default.string().required(),
    userPassword: joi_1.default.string().required(),
    userDeviceId: joi_1.default.string().optional().allow('')
});
exports.authRegistrationSchema = joi_1.default.object({
    userName: joi_1.default.string().optional().allow(''),
    userWhatsappNumber: joi_1.default.string().required(),
    userPassword: joi_1.default.string().min(6).required(),
    userDeviceId: joi_1.default.string().optional().allow(''),
    userInvitationCode: joi_1.default.string().required()
});
exports.updatePasswordSchema = joi_1.default.object({
    userPassword: joi_1.default.string().min(6).required(),
    userWhatsappNumber: joi_1.default.string().required()
});
