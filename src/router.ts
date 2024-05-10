import {Router} from 'express'
import {registerNewUser} from "./controllers/users";
import { createRestaurant } from "./controllers/restaurant"

const router = Router()
router.get('/home', (req, res)=> {
    res.json({message: 'home'})
});
router.post('/register', registerNewUser);
router.post('/restaurant/create', createRestaurant);



export default router