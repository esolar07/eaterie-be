import { Router } from 'express'
import { registerNewUser } from "./controllers/users";
import { createRestaurant } from "./controllers/restaurant"
import { authenticate } from './controllers/auth';
import {uploadImage, createAssetFolders} from "./controllers/assets";

const router = Router()
router.get('/home', (req, res)=> {
    res.json({message: 'home'})
});
router.post('/register', registerNewUser);
router.post('/restaurant/create', createRestaurant);
router.post('/authenticate', authenticate);
router.post('/assets/upload', uploadImage)
router.post('/assets/folder/create', createAssetFolders)

export default router