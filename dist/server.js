"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router_1 = __importDefault(require("./router"));
var morgan_1 = __importDefault(require("morgan"));
// import cors from 'cors'
// import {userAuthentication} from "./modules/auth";
// import {createNewUser, signIn} from "./handlers/user";
var cloudinary = require('cloudinary').v2;
var app = (0, express_1.default)();
// app.use(cors)
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
cloudinary.config({
    secure: true,
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});
app.get('/', function (req, res) {
    res.status(200);
    res.json({ message: 'hello' });
});
app.use('/api', router_1.default);
exports.default = app;
//# sourceMappingURL=server.js.map