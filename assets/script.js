
// assigning elements to the html
var startBtn = document.querySelector(".start-btn");
var answers = document.querySelector("#answers")
var next = document.querySelector(".next-btn")
var questions = document.querySelector("#questions")
var mainB = document.querySelector("#quesiton-box")
// console.log("mainB", mainB)
var endGame = document.querySelector(".end")
var index = 0;
var choose = 0;
var time = 60;
var score = 0;
// var intials = document.querySelector("#initials")


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

*/

var allQuestions = [

{
    question : 'What is 6 * 2?',
    a :15,
    b :19,
    c :12,
    d :10,
    correct : 12,
},
{
    question : 'What is 7 * 3?',
    a :14,
    b :21,
    c :16,
    d :24,
    correct : 21,
},
{
    question : 'What is 6 * 4?',
    a: 15,
    b: 20,
    c: 18,
    d: 30,
    correct : 20,
},
{
    question : 'What is 12 * 3?',
    a:11,
    b:23,
    c:12,
    d:36,
    correct : 36,   
},
{
    question : 'What is 20 * 5?',
    a : 100,
    b : 86,
    c : 112,
    d : 90,
    correct: 100,
},
{ 
    question : 'What is 9 * 2?',
    a : 15,
    b : 19,
    c : 10,
    d : 18,
    correct :18,   
},
{
    question : 'What is 15 + 5?',
    a :15,
    b :20,
    c :10,
    d :19,
    correct :20,
},
{
    question: ("What is 11 * 7"), 
    a: 77, 
    b: 44, 
    c: 42, 
    d: 16, 
    correct:(77)
},

 {
   question: ("What is 9 * 7"), 
   a: 77, 
   b: 44, 
   c: 63, 
   d: 16, 
  correct:(63)
},

{
  question: ("What is 9 * 3"), 
  a: 13, 
  b: 6, 
  c: 27, 
  d: 36, 
  correct:(27)
}

]

//added event listener for the start button to hide elements until it is clicked
//once clicked it will hide itself.
//created function start game and assigned what I wanted that function to do.
startBtn.addEventListener("click", startGame);


function startGame() {
    let answerButtons = document.querySelector('#answers').children
    console.log(answerButtons)
    for(let i = 0; i < answerButtons.length; i++){
        answerButtons[i].addEventListener("click", (event) => {
            let element = event.target.innerText
            console.log(element)
            checkAnswer(element)
            index++
            getQuestion()
        })
    }

    answers.classList.remove('hide')
    next.classList.remove('hide')
    questions.classList.remove('hide')
    // startBtn.classList.add('show')
    startBtn.classList.add('hide')
    // endGame.classList.add('hide')
    getQuestion();
    timer()



    console.log("start")
}

function skipQuestion(){
    index++
    getQuestion()
}
next.addEventListener("click",skipQuestion);

function timer(){
    var setTime = setInterval(() => {
        time--
        document.querySelector('#timer').innerText = time

        if(time === 0){
            
            clearInterval(setTime)
        }
    },1000)
}

function checkAnswer(answer){
    let parsedAnswer = parseInt(answer)
    let currentQuestion = allQuestions[index]

    console.log(answer)
    console.log(currentQuestion.correct)

    if(parsedAnswer === currentQuestion.correct){
        answers.classList.add('right')
        answers.classList.remove("wrong")
       score++;
       console.log("right")
       drawScore();
      

    }else{
        answers.classList.add('wrong')
        answers.classList.remove("right")
        console.log("wrong")
        time--;
    }
} 

function getQuestion(){

    if(allQuestions.length > index || time === 0 ){
        let currentQuestion = allQuestions[index]
        console.log(currentQuestion)

        document.getElementById("questions").textContent = currentQuestion.question
        document.getElementById("answer1").textContent = currentQuestion.a
        document.getElementById("answer2").textContent = currentQuestion.b
        document.getElementById("answer3").textContent = currentQuestion.c
        document.getElementById("answer4").textContent = currentQuestion.d
    }else{
        displayGameOver()
    }
}

function drawScore(){
  document.getElementById("points").textContent = score
  if(time === 0 ){
    endGame.classList.remove('hide')
    console.log('end')
  }
}



function displayGameOver(){
   mainB.classList.add('hide')
   endGame.classList.remove('hide')
   
}
/*
 - textbox for initials
 - save both initials and highscore to localstorage
 - display highscore along intials
*/

function saveScore(){
    //event.preventDefault()
    var initials = document.getElementById('initials').value
    // console.log(initials + score)
    console.log(initials);
    localStorage.setItem("score", initials + score);
}



// function nextQuestion(){

//     document.getElementById("questions").textContent = currentQuestion.question
//     document.getElementById("answer1").textContent = currentQuestion.a
//     document.getElementById("answer2").textContent = currentQuestion.b
//     document.getElementById("answer3").textContent = currentQuestion.c
//     document.getElementById("answer4").textContent = currentQuestion.d 


// }