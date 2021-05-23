var readlineSync = require("readline-sync");
var username = readlineSync.question("What is your Name? \n\n");
var print = console.log("\nWelcome",username,"To Do you Know Vaibhav?\n\n");
var score = 0;
function play(question,answer){
var useranswer = readlineSync.question(question);
if(useranswer.toUpperCase()===answer.toUpperCase()){
  console.log("You are Right");
  score++;
}
else{
  console.log("You are wrong");
  console.log("Correct Answer is",answer);
}
console.log("Current Score:",score);
console.log("--------");
}
var questions = [
 {
    question:"Where does Vaibhav live? \n",
    answer:"jaipur"
  },{
    question:"Which Degree Vaibhav Is Currently Pursuing? \n",
    answer:"engineering"
  },{
    question:"Which is Vaibhav's favourite Movie? \n",
    answer:"zindagi na milegi dobara"
  }
];
for(var i=0;i<questions.length;i++){
  var currentquestion = questions[i];
  play(currentquestion.question,currentquestion.answer);

}
if(score>0)
console.log("YAY! Your Score is:",score);
else
console.log("You really don't know him surely you are a stranger, Your final Score is:",score);