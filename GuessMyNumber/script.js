"use strict";

//Show/hide instructions
let instr = document.querySelector(".instructions");
instr.style.display = "none";

function toggleInstr() {
  if (instr.style.display === "none") {
    instr.style.display = "inline";
  } else {
    instr.style.display = "none";
  }
}
document
  .querySelector(".instructionsBtn")
  .addEventListener("click", toggleInstr);

//Generating a number between 1 and 30
let secretNumber = Math.trunc(Math.random() * 30 + 1);

let score = 10;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //When there is no input
  if (!guess) {
    displayMessage("⛔ No number provided!");

    //When player wins
  } else if (guess === secretNumber) {
    displayMessage("🎉Correct Number!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector(".number").style.width = "30rem";

    //Updating the highscore
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  }
  //Number not guessed
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "Too high" : "Too low");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("🤕 You lost the game!");
      document.querySelector("body").style.backgroundColor = "#c23530";
      document.querySelector(".score").textContent = 0;
      document.querySelector(".number").textContent = secretNumber;
    }
  }
});

//Again button
document.querySelector(".again").addEventListener("click", function () {
  score = 10;
  secretNumber = Math.trunc(Math.random() * 30 + 1);

  displayMessage("Start guessing...");

  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
