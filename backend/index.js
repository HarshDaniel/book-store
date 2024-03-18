import express from 'express'
import { PORT, DB_URL } from './config.js'
import mongoose from 'mongoose'
import booksRoute from './routes/booksRoute.js'
import cors from 'cors'

const app = express()

app.use(express.json())

app.use(cors())


app.use('/books', booksRoute)

mongoose.connect(DB_URL)
    .then(() => {
        console.log("connected to database")
        app.listen(PORT, () => {
            console.log("server is running at port " + PORT)
        })
    })
    .catch((err) => console.log(err))