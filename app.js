import './config.js'
import express from 'express'
import userRoute from "./routes/userRoutes.js"
import topicRoute from './routes/topicRoutes.js'
import cors from 'cors'
const app = express();
app.use(cors())
app.use(express.json())
app.use('/api/v1/signup',userRoute)
app.use('/api/v1/topic', topicRoute)
export default app;