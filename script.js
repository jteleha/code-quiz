const startButton = document.querySelector(".startButton");
const saveButton = document.getElementById("save-button");
const quizContainer = document.getElementById("quiz-container");

startButton.addEventListener("click", startQuiz);
saveButton.addEventListener("click", saveScore);

let time = 30
let timerInterval;
let currentQuestionIndex = 0;

function startQuiz() {
    timerInterval = setInterval(updateTimer, 3000);
    presentQuestion();
}

function updateTimer() {
    document.getElementById("timer").textContent = time;
    time--;
    if (time < 0) {
        clearInterval(timerInterval);
        endQuiz();
    }
}

function presentQuestion() {
    const questionElement = document.getElementById("question");
    const answersElement = document.getElementById("answers");
    const currentQuestion = quizQuestions[currentQuestionIndex];
    
    questionElement.textContent = currentQuestion.question;
    
    while (answersElement.firstChild) {
        answersElement.removeChild(answersElement.firstChild);
    }

    for (let i = 0; i < currentQuestion.options.length; i++) {
        const option = currentQuestion.options[i];
        const answerButton = document.createElement("button");
        answerButton.textContent = option;
        answerButton.setAttribute("data-index", i);
        answerButton.addEventListener("click", handleAnswerClick);
        answersElement.appendChild(answerButton);
    }

}

function handleAnswerClick(event) {
    const selectedOptionIndex = event.target.getAttribute("data-index");
    checkAnswer(selectedOptionIndex);
}

function checkAnswer(selectedOptionIndex) {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    const correctAnswerIndex = parseInt(currentQuestion.answer);

    if (selectedOptionIndex === correctAnswerIndex.toString()) {
        incrementScore();
    } else {

    }
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
        presentQuestion();
    } else {
        endQuiz();
    }
}

function incrementScore() {
    const scoreElement = document.getElementById("score");
    let currentScore = parseInt(scoreElement.textContent);
    currentScore++;
    scoreElement.textContent = currentScore;
}

function endQuiz() {
    clearInterval(timerInterval);
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

function saveScore() {
    const initialsInput = document.getElementById("initials");
    const initials = initialsInput.value.trim();

    if (initials !== "") {
        const score = document.getElementById("score").textContent;
        const scoreEntry = {
            initials: initials,
            score: score
        };

        saveScoreToLocalStorage(scoreEntry);
        initialsInput.value = "";
        displayHighScores();
    }
}

function saveScoreToLocalStorage(scoreEntry) {
    let highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    highScores.push(scoreEntry);
    highScores.sort((a,b) => b.score - a.score);
    localStorage.setItem("highScores", JSON.stringify(highScores));
}

function displayHighScores() {
    const highScoresList = document.getElementById("high-scores-list");
    const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    
    highScores.forEach(scoreEntry => {
        const listItem = document.createElement("li");
        listItem.textContent = `${scoreEntry.initials}: ${scoreEntry.score}`;
        highScoresList.appendChild(listItem);
    });
        
}



