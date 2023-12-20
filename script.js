const quizData = [
    {
        question: "Which element do we put Javascript in?",
        choices: ["<script>", "<javascript>", "<scripting>", "<js>"],
        correctAnswer: "<script>"
    },
    {
        question: "What occurs when the user clicks on an HTML element?",
        choices: ["onmouseclick", "onchange", "onmouseover", "onclick"],
        correctAnswer: "onclick"
    }
];

let currentQuestion = 0;
let score = 0;
let timeLeft = 10;
let timerInterval;

const startButton = document.getElementById('start-button');
const submitButton = document.getElementById('submit-button');
const saveButton = document.getElementById('save-button');
const initialsInput = document.getElementById("initials");

startButton.addEventListener('click', startQuiz);
submitButton.addEventListener("click", submitAnswer);
saveButton.addEventListener("click", saveScore);

function startQuiz() {
    startButton.style.display = "none";
    displayQuestion();
    timerInterval = setInterval(updateTimer, 1000);
}

function displayQuestion() {
    const questionElement = document.getElementById("question");
    const choicesElement = document.getElementById("choices");
    const currentQuizData = quizData[currentQuizData.question];
    choicesElement.innerHTML = "";

    currentQuizData.choices
}