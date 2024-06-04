"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createJwt = exports.hashPassword = exports.verifyPassword = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var bcrypt_1 = __importDefault(require("bcrypt"));
var verifyPassword = function (password, hashedPassword) { return bcrypt_1.default.compare(password, hashedPassword); };
exports.verifyPassword = verifyPassword;
var hashPassword = function (password) { return bcrypt_1.default.hash(password, 5); };
exports.hashPassword = hashPassword;
var createJwt = function (user) {
    return jsonwebtoken_1.default.sign({
        id: user.id,
        email: user.email
    }, process.env.JWT_SECRET);
};
exports.createJwt = createJwt;
//# sourceMappingURL=auth.js.map