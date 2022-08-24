const userSchema=require('../model/userSchema')
const jwt=require('jsonwebtoken')
const login=(req,resp)=>{

console.log(req.body)
    //find mail is present in the data base yes or not 
userSchema.findOne({email:req.body.email},function(e,userObject){
    console.log(userObject)
    if(e) resp.status(400).json(e);
    //if email is avalebal
    if(userObject){
 // email is avalebal now check for the password
        if(userObject.checkMyPassword(req.body.password))
        {

            //now issue token
            const token=jwt.sign({data:userObject},process.env.JWT_SECRET,{expiresIn:'1h'})
            resp.status(200).json(
                {
                    "msg":"login Success",
                    data:userObject,
                    token:token
            })
        }
        else{
            resp.status(403).json({
                msg:'invalid credintials'

            })
        }
    }
    else{
        resp.status(403).json({
            msg:'invalid credinals'
        });
    }
})





}
module.exports=login;