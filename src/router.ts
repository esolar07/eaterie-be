import { Router } from 'express'
import { registerNewUser } from "./controllers/users";
import { createRestaurant } from "./controllers/restaurant"
import { authenticate } from './controllers/auth';
import {uploadImage} from "./controllers/assets";

const router = Router()
router.get('/home', (req, res)=> {
    res.json({message: 'home'})
});
router.post('/register', registerNewUser);
router.post('/restaurant/create', createRestaurant);
router.post('/authenticate', authenticate);
router.post('/image/upload', uploadImage)

export default router