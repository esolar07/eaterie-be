import {Router} from 'express'

const router = Router()
router.get('/home', ()=> {alert(`On Home Page`)});


export default router