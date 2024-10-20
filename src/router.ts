import { Router } from 'express'
import { registerNewUser, signIn } from "./controllers/users";
import { createRestaurant } from "./controllers/restaurant"
import {uploadImage, createAssetFolders} from "./controllers/assets";
import { verifyToken } from "./modules/auth";
import {createPost} from "./controllers/posts";

const router = Router()
router.get('/home', (req, res)=> {
    res.json({message: 'home'})
});
router.post('/register', registerNewUser);
router.get('/user')
router.post('/register/restaurant', verifyToken, createRestaurant);
router.post('/authenticate', signIn);
router.post('/post', verifyToken, createPost)
router.get('/post')

export default router