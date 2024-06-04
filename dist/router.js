"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var users_1 = require("./controllers/users");
var restaurant_1 = require("./controllers/restaurant");
var auth_1 = require("./controllers/auth");
var router = (0, express_1.Router)();
router.get('/home', function (req, res) {
    res.json({ message: 'home' });
});
router.post('/register', users_1.registerNewUser);
router.post('/restaurant/create', restaurant_1.createRestaurant);
router.post('/authenticate', auth_1.authenticate);
router.post('/image/upload', auth_1.authenticate);
exports.default = router;
//# sourceMappingURL=router.js.map