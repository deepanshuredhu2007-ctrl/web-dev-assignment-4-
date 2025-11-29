// Simple JavaScript Quiz Game
// Runs entirely in the browser console

// 1. Array of quiz questions and answers
const quizQuestions = [
  {
    question: "What does HTML stand for?",
    answer: "hypertext markup language"
  },
  {
    question: "Which keyword is used to declare a variable in JavaScript (ES6)?",
    answer: "let"
  },
  {
    question: "What is the result of 2 + 2 * 2 in JavaScript?",
    answer: "6"
  },
  {
    question: "Which method converts a string to lowercase in JavaScript?",
    answer: "tolowercase"
  },
  {
    question: "Which built-in object is used to show a popup asking for user input?",
    answer: "prompt"
  }
];

// 2. Function that runs the quiz
function runQuiz() {
  let score = 0; // score starts at 0

  for (let i = 0; i < quizQuestions.length; i++) {
    const current = quizQuestions[i];

    // Ask the question
    let userInput = prompt("Q" + (i + 1) + ": " + current.question);

    // If user cancels, treat as empty string
    if (userInput === null) {
      userInput = "";
    }

    // Normalize input and answer
    const cleanedInput = userInput.toLowerCase().trim();
    const cleanedAnswer = current.answer.toLowerCase().trim();

    // Check the answer
    if (cleanedInput === cleanedAnswer) {
      score++;
      alert("Correct! ✅");
    } else {
      alert("Wrong ❌\nCorrect answer: " + current.answer);
    }
  }

  // Final score
  alert(
    "Quiz finished!\n" +
    "Your score: " + score + " / " + quizQuestions.length
  );
}

// 3. Call this in the console to start quiz:
// runQuiz();
