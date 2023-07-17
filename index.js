const express=require('express');
require('dotenv').config();

app=express();
app.use(express.json());
const {connection}=require("./db")
const {UserRoute}=require("./Routes/user.route")
const cors=require('cors');
const { quizRoute } = require('./Routes/quiz.route');
app.use(cors())
app.use("/",UserRoute)
app.use("/quiz",quizRoute)












app.listen(process.env.PORT,async()=>{
    try {
        await connection
        console.log("connected to db")
    } catch (error) {
        console.log("some error occured")
    }
    console.log("server is running")
})