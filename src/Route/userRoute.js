const express=require('express')
const { signin } = require('../Controller/signin')
const userRoute=express.Router()

userRoute.post("/signup",signin)

exports.userRoute=userRoute;