"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/index.ts
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const createServer = (mongoUri) => {
    const app = (0, express_1.default)();
    app.use(body_parser_1.default.json());
    app.use('/users', userRoutes_1.default);
    mongoose_1.default.connect(mongoUri, {}).then(() => console.log('MongoDB connected'))
        .catch(err => console.log(err));
    app.get('/', (req, res) => {
        res.send('Hello, TypeScript with Node.js!');
    });
    return app;
};
exports.default = createServer;
