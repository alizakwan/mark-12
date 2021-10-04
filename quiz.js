const quizForm = document.querySelector(".quiz-Form");
const submitAnswerbtn = document.querySelector("#submit-answer-btn");
const output = document.querySelector("#output");

const correctAnswers = [
  "90°",
  "right angled",
  "3",
  "180°",
  "75°",
  "6",
  "0",
  "a+b+c",
  "30°",
  "1",
];

function calculateScore() {
  let score = 0;
  let index = 0;
  const formResults = new FormData(quizForm);
  for (let value of formResults.values()) {
    if (value === correctAnswers[index]) {
      score = score + 1;
    }
    index = index + 1;
  }
  console.log(score);
  output.innerText = "Your score is" + score;
}

submitAnswerbtn.addEventListener("click", calculateScore);
