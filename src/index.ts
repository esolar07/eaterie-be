import express from 'express';
import router from './router';
import http from 'http';
import cors from 'cors';

const app = express()
//
// app.use(cors())
// app.use(express.json())
// app.use(express.urlencoded({extended: true}))
//
// app.get('/', (req, res) => {
//     console.log('hello')
//     res.status(200)
//     res.json({message: 'hello'})
// })
//
// app.use('/api',  router)
//
// export default app