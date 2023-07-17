const express=require('express');
const { QuizModel } = require('../Models/quiz.model');
const quizRoute=express.Router();


quizRoute.post("/post",async(req,res)=>{
    const {creator,title,description,question1,question2,question3,question4,question5,question6,question7,question8,question9,question10}=req.body;
    let filter=[];
    if(question1.title){
        question1.answerOptions=  question1.answerOptions.trim().split(",")
        question1.correctOptions=question1.correctOptions.trim().split(",").map(Number)
       filter.push(question1)
    }
    if(question2.title){
        question2.answerOptions=question2.answerOptions.trim().split(",")
        question2.correctOptions=question2.correctOptions.trim().split(",").map(Number)
       filter.push(question2)
    }
    if(question3.title){
        question3.answerOptions=question3.answerOptions.trim().split(",")
        question3.correctOptions=question3.correctOptions.trim().split(",").map(Number)
       filter.push(question3)
    }
    if(question4.title){
        question4.answerOptions=question4.answerOptions.trim().split(",")
        question4.correctOptions=question4.correctOptions.trim().split(",").map(Number)
       filter.push(question4)
    }
    if(question5.title){
        question5.answerOptions=question5.answerOptions.trim().split(",")
        question5.correctOptions=question5.correctOptions.trim().split(",").map(Number)
       filter.push(question5)
    }
    if(question6.title){
        question6.answerOptions=question6.answerOptions.trim().split(",")
        question6.correctOptions=question6.correctOptions.trim().split(",").map(Number)
       filter.push(question6)
    }
    if(question7.title){
        question7.answerOptions=question7.answerOptions.trim().split(",")
        question7.correctOptions=question7.correctOptions.trim().split(",").map(Number)
       filter.push(question7)
    }
    if(question8.title){
        question8.answerOptions=question8.answerOptions.trim().split(",")
        question8.correctOptions=question8.correctOptions.trim().split(",").map(Number)
       filter.push(question8)
    }
    if(question9.title){
        question9.answerOptions=question9.answerOptions.trim().split(",")
        question9.correctOptions=question9.correctOptions.trim().split(",").map(Number)
       filter.push(question9)
    }
    if(question10.title){
        question10.answerOptions=question10.answerOptions.trim().split(",")
        question10.correctOptions=question10.correctOptions.trim().split(",").map(Number)
       filter.push(question10)
    }
    try {
        if(filter.length<2){
            res.send({msg:"quiz must contain atleast 2 questions"})
        }else{
            const quiz=await new QuizModel({creator,title,description,questions:filter})
            quiz.save();
            res.send({msg:"quiz cerated!"})
        }
       // console.log(filter)
    } catch (error) {
        console.log(error.message)
    }
})

quizRoute.get("/get",async(req,res)=>{
    try {
      const data =  await QuizModel.find();
      res.send({msg:data}) 
    } catch (error) {
        console.log(error.message)
    }
})

quizRoute.delete("/delete/:quizID",async(req,res)=>{
    const {quizID}=req.params
    try {
       await QuizModel.findByIdAndDelete({_id:quizID})
       res.send({msg:"quiz deleted"})
    } catch (error) {
        console.log(error.message)
    }
})
quizRoute.patch("/update/:quizID",async(req,res)=>{
    const {quizID}=req.params
    try {
       await QuizModel.findByIdAndUpdate({_id:quizID},{title:req.body.title,description:req.body.description})
       res.send({msg:"quiz updated"})
       
    } catch (error) {
        console.log(error.message)
    }
})













module.exports={quizRoute}