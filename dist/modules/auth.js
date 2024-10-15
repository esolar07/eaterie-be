"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.createJwt = exports.hashPassword = exports.verifyPassword = void 0;
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
var verifyToken = function (req, res, next) {
    var bearerToken = req.headers.auth;
    if (!bearerToken) {
        res.status = 401;
        res.json({ message: "Not authenticated." });
        return;
    }
    var _a = bearerToken.split(" "), bearer = _a[0], token = _a[1];
    try {
        var user = jsonwebtoken_1.default.verify(bearerToken, process.env.JWT_SECRET);
        req.user = user;
        next();
    }
    catch (e) {
        res.status = 401;
        res.json({ message: "Not authenticated." });
        return;
    }
};
exports.verifyToken = verifyToken;
//# sourceMappingURL=auth.js.map