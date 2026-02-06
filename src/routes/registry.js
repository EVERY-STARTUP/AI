"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const AppCheck_1 = __importDefault(require("./AppCheck"));
const Auth_1 = __importDefault(require("./Auth"));
const FetchData_1 = __importDefault(require("./FetchData"));
const RemoveData_1 = __importDefault(require("./RemoveData"));
const Webhook_1 = __importDefault(require("./Webhook"));
const RoutesRegistry = {
    AppCheckRoutes: AppCheck_1.default,
    AuthRoutes: Auth_1.default,
    WebhookRoutes: Webhook_1.default,
    FetchDataRoutes: FetchData_1.default,
    RemoveDataRoutes: RemoveData_1.default
};
exports.default = RoutesRegistry;
