
// assigning elements to the html
var startBtn = document.querySelector(".start-btn");
var answers = document.querySelector(".select")
var next = document.querySelector(".next-btn")
var questions = document.querySelector("#questions")
var index = 0;
var choose = 0;



/*var question1 = {q1: ("What is 6 * 2?"), a: 15, b: 19, c: 12, d: 10, correct:("c")}
var question2 = {q1: ("What is 7 * 3?"), a: 14, b: 21, c: 16, d: 24, correct:("b")}
var question3 = {q1: ("What is 6 * 4?"), a: 20, b: 18, c: 13, d: 30, correct:("a")}
var question4 = {q1: ("What is 12 - 3?"), a: 11, b: 9, c: 12, d: 36, correct:("b")}
var question5 = {q1: ("What is 20 * 5?"), a: 100, b: 86, c: 112, d: 90, correct:("a")}
var question6 = {q1: ("What is 9 * 2?"), a: 15, b: 19, c: 10, d: 18, correct:("d")}
var question7 = {q1: ("What is 15 + 5?"), a: 15, b:20, c:10, d: 19, correct:("b")}
var question8 = {q1: ("What is 6 * 6"), a: 52, b: 37, c: 24, d: 36, correct:("d")}
var question9 = {q1: ("What is 11 * 7"), a: 77, b: 44, c: 42, d: 16, correct:("a")}
var question10 = {q1: ("What is 9 * 3"), a: 13, b: 6, c: 27, d: 36, correct:("c")}

document.getElementById("answer1").innerHTML = question1.a;
document.getElementById("answer2").innerHTML = question1.b;
document.getElementById("answer3").innerHTML = question1.c;
document.getElementById("answer4").innerHTML = question1.d;
document.getElementById("questions").innerHTML = question1.q1;
*/





var allQuestions = [
{
    question : 'What is 6 * 2?',
    choices :{
        a :15,
        b :19,
        c :12,
        d :10,

    },
correct : "c"

},
{
    question : 'What is 7 * 3?',
    choices :{
    a :14,
    b :21,
    c :16,
    b :24,
},
correct : "b",
},
{
    question : 'What is 6 * 4?',
    choices :{
    a: 15,
    b: 20,
    c: 18,
    d: 30,
},
    correct : "b",
},
{
    question : 'What is 12 * 3?',
    choices :{
    a:11,
    b:23,
    c:12,
    d:36,
},
    correct :"d",
    
    
},
{
    question : 'What is 20 * 5?',
    choices :{
    a : 100,
    b : 86,
    c : 112,
    d : 90,
},
    correct :"a",
},
{ 
    question : 'What is 9 * 2?',
    choices :{
    a : 15,
    b : 19,
    c : 10,
    d : 18,
},
    correct :"d",
},
{
    question : 'What is 15 + 5?',
    choices :{
    a :15,
    b :20,
    c :10,
    d :19,
},
    correct :"b",
},
  
    
]

//added event listener for the start button to hide elements until it is clicked
//once clicked it will hide itself.
//created function start game and assigned what I wanted that function to do.
startBtn.addEventListener("click", startGame);

function startGame() {
answers.classList.remove('hide')
next.classList.remove('hide')
questions.classList.remove('hide')
startBtn.classList.add('show')
console.log("start")
//getQuestion();
//gettingAnswers();


}

// function getQuestion(allQuestions, quizContainer){
// var output = [];
// var answers;
// for( var i=0; i < allQuestions.length; i++){
//     answers = [];
//     for()

// }
// }

//We want to have an index that we can refernce for the question and because this is an array
//its going to start at 0


/*function getQuestion(){
    var currentQuestion = question1[index]
    document.getElementById("questions").textContent = currentQuestion.question1
}
function gettingAnswers(){ 
    var currentAnswers = allQuestions[choose]
   document.getElementsById("answer1").textContent = currentAnswers.choices.a
}
for()*/









































// function starTime(){ 
// var timeleft = 10;
// var stopTime = setInterval(function(){
// if(timeleft <= 0){
 
// setInterval(makeAlert, 10000);    
// clearInterval(timeleft);

// }


   
 
 
// // added event listener to next button with a for loop to loop thru array of questions 
// next.addEventListener("click", nextQuestion)
// function nextQuestion(){
//     //document.getElementById('{questions}').innerHTML = Object.keys();
//     document.getElementsByClassName('{answer}').innerHTML = question;
//     for( var i=0; i < allQuestions.length; i++){
//         console.log("hello")

// }

// // assigning variables to create functions 

// //var lastQuestion = allQuestions.length- 1;//this variable will be the last question in the array
// //var currentQuestion = 0; 











// need a function that is if wrongs options are chosen then this will happen and if right answer is chosen 
//this will happen 

