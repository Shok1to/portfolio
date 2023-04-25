var startQuiz = document.querySelector('#start-quiz');
var startBtn = document.querySelector('#start-btn');
var quiz = document.querySelector('#quiz');
var questionElement = document.getElementById('#question');
var answerButtonsElement = document.getElementById('.answer-btn');
var timeElement = document.querySelector("#time");
var countdown;

function startTheQuiz() {
    // Hide the start section
    startQuiz.style.display = "none";
    // To Do: Sho the question section
    quiz.style.display = "block";

    // Start our timer
   var timerDisplay = () => {
    countdown = setInterval(() => {
    count--;
    time.innerHTML = `${count}s`;
    if (count == 0) {
        clearInterval(countdown);
        displayNext();
      }
    }, 1000);
   }

    // call function to show a question
}


function populateQuestion(question){
  questionElement.innerText = question.question
}
var questions =[
    {
        question:'What is 2 + 2',
        answers: [
            { text:'4', correct: true },
            { text:'3', correct: false },
            { text:'2', correct: false },
            { text:'1', correct: false },

        ]
    }
]
function checkAnswer() {}

function endTheQuiz() {}

function saveScore() {}




startBtn.addEventListener('click', startTheQuiz);