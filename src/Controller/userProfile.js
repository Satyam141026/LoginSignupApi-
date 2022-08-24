const userProfile=(req,resp)=>{
    console.log(req.xyz)
    resp.status(200).json({
        msg:"okokok",
        data:req.xyz
    })

}
module.exports={userProfile}