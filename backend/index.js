import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/db.js'
import router from './routes/index.js'
import cookieParser from 'cookie-parser'

dotenv.config()

const app = express()

app.use(cors({
    origin:process.env.FRONTEND_URL,
    credentials:true
}))
app.use(express.json());
app.use(cookieParser())
app.use('/api', router)
connectDB()
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)
})