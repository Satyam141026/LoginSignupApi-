const express=require('express')
const app=express();
const env=require('dotenv')
const db=require('./config/db');
const { userRoute } = require('./Route/userRoute');



env.config()

//middleware
app.use(express.json())

//routes
app.use(userRoute)




app.listen(process.env.PORT,(req,resp)=>{
        console.log('Connection Succesfully')
})