import './config.js'
import app from './app.js'
import mongoose from 'mongoose'
const port=process.env.PORT||8080
const dbConnection = process.env.DATABASE_CONNECTION_STRING.replace('<password>',process.env.PASSWORD)
mongoose.connect(dbConnection).then(conn=>{
    console.log(conn.connection,'Connection established')
})
app.listen(port,()=>{
    console.log(`listening to port ${port}`)
})