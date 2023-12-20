const startButton = document.querySelector("#startButton");

startButton.addEventListener("click, startQuiz");

let time = 0
let timerInterval;

function startQuiz() {
    timerInterval = setInterval(updateTimer, 1000);
    presentQuestion()
}

function updateTimer() {
    time++;
}

function presentQuestion() {
    const firstQuestion = quizQuestions[0];
    questionElement.textContent = firstQuestion.question;

}

const quizQuestions = [
    {
        question: "Commonly used data types do NOT include:",
        options: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
        answer: "2"

    },
    {
        question: "The condition in an if/then statement is enclosed within _____.",
        options: ["1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets"],
        answer: "1"
    },
    {
        question: "Arrays in JavaScript can be used to store ____.",
        options: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
        answer: "3"
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        options: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
        answer: "2"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        options: ["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console.log"],
        answer: "3"
    },
];
