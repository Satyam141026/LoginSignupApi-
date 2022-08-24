const mongoose=require('mongoose')
const bcrypt = require('bcrypt');
const userSchema=mongoose.Schema({
        fname:{
            type:String,
            required:true,
            trim:true
        },
        lname:{
            type:String,
            required:true,
            trim:true
        },
        email:{
            type:String,
            unique:true,
            required:true,
            lowercase:true,
            trim:true
        },

        hash_pass:{
            type:String
        }
},{
    timestamps:true
})
//We are going to create virtual fields
//1 set
//2 get

//1. set

// Postman -> plainpass ->  hash ->  hash_pass

userSchema.virtual('password').set(function(password){
   this.hash_pass = bcrypt.hashSync(password, 10); 

});
//Lets attach some functions


 userSchema.methods = {
    /**
     * p:v
     * fn:function(){}
     */
    checkMyPassword:function(p){ //formal argument
        return bcrypt.compareSync(p, this.hash_pass);;
    }
}; 



module.exports=mongoose.model('profiledetails',userSchema)