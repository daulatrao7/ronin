//console.log ("darkace");
var readlineSync= require('readline-sync');
var score = 0;
var username = readlineSync.question ('what is your dota name?');
//console.log (username);
var welcomemessage = "welcome to dota questions " + username;

console.log(welcomemessage + " lets get started");

function play(question, answer)
{
var userAnswer = readlineSync.question(question);

if(userAnswer === answer)
{
console.log("aaaaalright dude");
score = score + 1;
}
else{
  console.log("NOOB!! git gud");
}
console.log("current score is " + score);
console.log("___________________");
}


var questions = [{
  question:"are you in the guild? ",
  answer: "yes"
},{
  question:"is para noob? ",
  answer: "yes"
},{
  question:"ace pudge besht pudge? ",
  answer: "yes"
},{
  question:"Who is the best mid player? ",
  answer: "iceman"
},{
  question:"Who plays better than everyone at every position ",
  answer: "demon"
},{
  question:"Who experiments the most with positions? ",
  answer: "santosh"
},{
  question:"Who has LP most of the times? ",
  answer: "aki"
},{
  question:"Who invents the best strats? ",
  answer: "mnt"
},{
  question:"Who is the 'Untiltable Mountain'? ",
  answer: "greasemonkey"
},{
  question:"Who is our beloved guild creator and glorified Pos5?",
  answer: "danny"
},{
  question:"who is the best meme player?",
  answer: "jjx"
},{
  question:"Who is going to die of smoking? ",
  answer: "llama"
}];

for (var i=0; i<questions.length; i++){
 var currentQuestion= questions[i];
 play (currentQuestion.question, currentQuestion.answer)
} 
console.log("OK GG you scored " + score);
