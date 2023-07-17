const mongoose=require('mongoose');

const quizSchema=mongoose.Schema({
    
          creator: String,
          title: String,
          description: String,
          questions: [
            {
              title: String,
              answerOptions: [String,String,String,String],
              correctOptions: [Number,Number,Number,Number]
            }
          ],
        leaderboard: [{email:String,Score:Number}]
      
});


const QuizModel=mongoose.model("quiz",quizSchema);


module.exports={QuizModel}