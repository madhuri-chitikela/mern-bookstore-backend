import express from "express";
import { PORT, mongoDBUrl } from './config.js';
import mongoose from 'mongoose';
import bookRoutes from './routes/bookRoutes.js';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

// app.use(cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type']
// }))

app.get('/', (req, res) => {
    return res.status(200).send('WELCOME MERN')
})

app.use('/books', bookRoutes);

mongoose
    .connect(mongoDBUrl)
    .then(() => {
        console.log('connected MongoDb')
        app.listen(PORT, () => {
            console.log(`server running at ${PORT}`)
        })
    }).catch((error) => {
        console.log(error)
    })
