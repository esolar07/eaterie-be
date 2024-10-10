import express from 'express'
import router from './router'
import morgan from 'morgan'
// import cors from 'cors'
// import {userAuthentication} from "./modules/auth";
// import {createNewUser, signIn} from "./handlers/user";
const cloudinary = require('cloudinary').v2;
const app = express()

// app.use(cors)
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

cloudinary.config({
    secure: true,
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

app.get('/', (req, res) => {
    res.status(200)
    res.json({message: 'hello'})
})

app.use('/api',  router)

export default app