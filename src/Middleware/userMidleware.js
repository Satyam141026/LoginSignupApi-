const jwt=require('jsonwebtoken');
const env=require('dotenv')
env.config()
const userMidleware=(req,resp,next)=>{
    //console.log(req.headers.authorization)
    const token=req.headers.authorization;
  //console.log(process.env.JWT_SECRET,'key')
 
try {
    const decoded=jwt.verify(token,process.env.JWT_SECRET)
    //console.log(decoded)
    req.xyz=decoded;
    next()
} catch (error) {
    resp.status(403).json({
        msg:"Unauthorized Access",
        error:error,
       
    })
}
}

module.exports={userMidleware}