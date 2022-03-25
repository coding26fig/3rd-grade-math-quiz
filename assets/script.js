
// assigning elements to the html
var startBtn = document.querySelector(".start-btn");
var answers = document.querySelector(".select")
var next = document.querySelector(".next-btn")
var question = document.querySelector("#questions")

//putting questions into an array to make them easy to pull from 

var allQuestions = [
{
    question : 'What is 6 * 2?',
    choice1 : 15,
    choice2 : 19,
    choice3 : 12,
    choice4 : 10,
    correct : "3",
},
{
    question : 'What is 7 * 3?',
    choice1 : 14,
    choice2 : 21,
    choice3 : 16,
    choice4 : 24,
    correct : "2",
},
{
    question : 'What is 6 * 4?',
    choice1 : 15,
    choice2 : 20,
    choice3 : 18,
    choice4 : 30,
    correct : "2" ,
},
{
    question : 'What is 12 * 3?',
    choice1 : 11,
    choice2 : 23,
    choice3 : 12,
    choice4 : 36,
    correct :"4" ,
    
    
},
{
    question : 'What is 20 * 5?',
    choice1 : 100,
    choice2 : 86,
    choice3 : 112,
    choice4 : 90,
    correct :"1" ,
},
{ 
    question : 'What is 9 * 2?',
    choice1 : 15,
    choice2 : 19,
    choice3 : 10,
    choice4 : 18,
    correct :"4" ,
},
{
    question : 'What is 15 + 5?',
    choice1 : 15,
    choice2 : 20,
    choice3 : 10,
    choice4 : 19,
    correct :"2" ,
},
{    
    question : 'Who s the best mom in the whole wide world?',
    choice1 : "Charnay",
    choice2 : "Charnay",
    choice3 : "Charnay",
    choice4 : "Charnay", 
    correct : "1,2,3,4",
}  
    
]

//added event listener for the start button to hide elements until it is clicked
//once clicked it will hide itself.
//created function start game and assigned what I wanted that function to do.
startBtn.addEventListener("click", startGame);

function startGame() {
answers.classList.remove('hide')
next.classList.remove('hide')
question.classList.remove('hide')
startBtn.classList.add('show')
nextQuestion()

console.log("hi")
}

function nextQuestion(){

}

function answer(){

}

    

   //remove the hide class from the divs
   //add the show class to the same divs instead.  
