import {Router} from 'express'
import {registerNewUser} from "./controllers/users";

const router = Router()
router.get('/home', ()=> {alert(`On Home Page`)});
// router.post('/register', registerNewUser);


export default router