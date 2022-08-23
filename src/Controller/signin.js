const userSchema = require("../model/userSchema");
const bcrypt = require('bcrypt');

const signin=(req,resp)=>{
    console.log(req.body)

    
userSchema.findOne({email:req.body.email},function(error,data){
    if(error) resp.status(400).json(error);
    //email if already exist
    if(data){
        resp.status(400).json({
            msg:"user already exist",
          
        });
    }
  else{
    //Create the recoed
    userSchema.create(req.body,function(e,d){
        if(error) resp.status(400).json(error);
        resp.status(201).json({
            msg:'Create Succesfully',
            data:d
        })
    })

    }
})



/* data.save()
.then((data)=>{
    resp.status(201).json({
        data:data
    })
})
.catch((e)=>{
    resp.status(503).json({
       e:e
    })
}) */


   
    
}

exports.signin=signin;