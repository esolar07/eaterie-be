import {Router} from 'express'
import {registerNewUser} from "./controllers/users";

const router = Router()
router.get('/home', (req, res)=> {
    res.json({message: 'home'})
});
router.post('/register', registerNewUser);


export default router