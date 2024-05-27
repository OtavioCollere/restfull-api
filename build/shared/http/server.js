"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var router_1 = __importDefault(require("./router"));
var AppError_1 = __importDefault(require("./errors/AppError"));
var app = express_1.default();
app.use(router_1.default);
app.use(function (error, request, response, next) {
    if (error instanceof AppError_1.default) {
        return response.status(error.statusCode).json({
            message: error.message,
            status: 'error'
        });
    }
    return response.status(500).json({
        status: 'erro',
        message: 'Internal server error!'
    });
});
app.use(cors_1.default());
app.use(express_1.default.json());
app.listen(3000, function () {
    console.log("Server running at http://localhost:3000 🏆");
});
