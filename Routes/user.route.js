const express=require('express');
const { UserModel } = require('../Models/user.model');

const UserRoute=express.Router();


UserRoute.post("/reg",async(req,res)=>{
    const {Username,Email}=req.body;
    const user=await UserModel.find({Email});
    try {
        
        if(user.length>0){
            res.send({msg:"user already registered!"})
        }else if(user.length===0){
            const userp=await new UserModel({Username,Email});
            userp.save();
            res.send({msg:"user registered!"})
        }
    } catch (error) {
        console.log(error.message)
    }
})












module.exports={UserRoute}