"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var users_1 = require("./controllers/users");
var restaurant_1 = require("./controllers/restaurant");
var assets_1 = require("./controllers/assets");
var auth_1 = require("./modules/auth");
var router = (0, express_1.Router)();
router.get('/home', function (req, res) {
    res.json({ message: 'home' });
});
router.post('/register', users_1.registerNewUser);
router.get('/user');
router.post('/register/restaurant', auth_1.verifyToken, restaurant_1.createRestaurant);
router.post('/authenticate', users_1.signIn);
router.post('/assets/upload', assets_1.uploadImage);
router.post('/assets/folder/create', assets_1.createAssetFolders);
exports.default = router;
//# sourceMappingURL=router.js.map