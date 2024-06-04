"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRestaurant = void 0;
var db_1 = __importDefault(require("../db"));
var auth_1 = require("../modules/auth");
var createRestaurant = function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, contactPhone, address, image, contactName, restaurantName, restaurantAddress, restaurantPhone, password, contactEmail, restaurant, _b, _c, error_1;
    var _d, _e, _f, _g;
    return __generator(this, function (_h) {
        switch (_h.label) {
            case 0:
                _h.trys.push([0, 3, , 4]);
                _a = req.body, contactPhone = _a.contactPhone, address = _a.address, image = _a.image, contactName = _a.contactName, restaurantName = _a.restaurantName, restaurantAddress = _a.restaurantAddress, restaurantPhone = _a.restaurantPhone, password = _a.password, contactEmail = _a.contactEmail;
                _c = (_b = db_1.default.restaurantUser).create;
                _d = {};
                _e = {
                    contactPhone: contactPhone,
                    address: address,
                    image: image,
                    contactName: contactName,
                    restaurantName: restaurantName,
                    restaurantAddress: restaurantAddress,
                    restaurantPhone: restaurantPhone
                };
                _f = {};
                _g = {
                    email: contactEmail
                };
                return [4 /*yield*/, (0, auth_1.hashPassword)(password)];
            case 1: return [4 /*yield*/, _c.apply(_b, [(_d.data = (_e.User = (_f.create = (_g.password = _h.sent(),
                        _g), _f),
                        _e),
                        _d)])];
            case 2:
                restaurant = _h.sent();
                res.json({ message: 'Restaurant user profile created successfully', restaurant: restaurant });
                return [3 /*break*/, 4];
            case 3:
                error_1 = _h.sent();
                if (error_1.code === 'P2002') {
                    res.status(400).json({ error: 'Unique field violation. Contact email, contact phone, or restaurant phone already exists' });
                }
                else {
                    res.status(500).json({ error: 'An error occurred while creating the profile' });
                }
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.createRestaurant = createRestaurant;
//# sourceMappingURL=restaurant.js.map