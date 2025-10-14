"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceErrorHandler = void 0;
class ServiceErrorHandler extends Error {
    code;
    isServiceErrorHandler = true;
    constructor(message, code) {
        super(message);
        this.code = code;
        Object.setPrototypeOf(this, ServiceErrorHandler.prototype);
    }
}
exports.ServiceErrorHandler = ServiceErrorHandler;
