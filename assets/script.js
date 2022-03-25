var startBtn = document.querySelector(".start-btn");
var answers = document.querySelector(".select")
var next = document.querySelector(".next-btn")
var question = document.querySelector("#questions")

// grab all divs with class hide 

startBtn.addEventListener("click", startGame);

function startGame() {
answers.classList.remove('hide')
next.classList.remove('hide')
question.classList.remove('hide')
startBtn.classList.add('show')
console.log("hi")
}


    

   //remove the hide class from the divs
   //add the show class to the same divs instead.  
