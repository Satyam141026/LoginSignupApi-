const express=require('express')
const login = require('../Controller/login')
const { signin } = require('../Controller/signin')
const { userProfile } = require('../Controller/userProfile')
const { userMidleware } = require('../Middleware/userMidleware')
const { userValidations, validateRequest } = require('../validators/userValidation')

const userRoute=express.Router()


userRoute.post("/signup",userValidations,validateRequest,signin)
userRoute.post("/login",login)
userRoute.get("/userprofile",userMidleware,userProfile)

exports.userRoute=userRoute;