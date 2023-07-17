const mongoose=require('mongoose');

const userSchema=mongoose.Schema({
    Username : String,
    Email:{
     unique:true,
     type:   String
    }
});


const UserModel=mongoose.model("user",userSchema);


module.exports={UserModel}