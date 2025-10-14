"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("../controllers/auth");
const AuthRoutes = (0, express_1.Router)();
AuthRoutes.post('/login', auth_1.AuthController.login);
exports.default = AuthRoutes;
