import express from 'express'
import router from './router'
import morgan from 'morgan'
import cors from 'cors'
// import {userAuthentication} from "./modules/auth";
// import {createNewUser, signIn} from "./handlers/user";

const app = express()

app.use(cors)
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.get('/', (req, res) => {
    console.log('hello0000s')
    res.status(200)
    res.json({message: 'hello'})
})

app.use('/api',  router)

export default app