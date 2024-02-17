let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreId = document.querySelector("#user-score");
const compScoreId = document.querySelector("#comp-score");

const genCompChoice = () => {
  let choiceList = ["rock", "paper", "scissors"];
  let index = Math.floor(Math.random() * 3);
  const compChoice = choiceList[index];
  return compChoice;
};

const showWinner = (userWin, userChoise, computerChoice) => {
  if (userWin) {
    msg.innerText = `You win ${userChoise} beats ${computerChoice}`;
    msg.style.backgroundColor = "Green";
    userScore = userScore + 1
    userScoreId.innerText = userScore;
  } else {
    msg.innerText = `You lose ${computerChoice} beats ${userChoise}`;
    msg.style.backgroundColor = "Red";
    compScore = compScore + 1;
    compScoreId.innerText = compScore;
  }
};

const playGame = (userChoise) => {
  //generate random choice by computer
  let computerChoice = genCompChoice();
  if (userChoise === computerChoice) {
    msg.innerText = "Game is Draw";
    msg.style.backgroundColor = "#081b31";
  } else {
    let userWin = true;
    if (userChoise === "rock") {
      userWin = computerChoice === "paper" ? false : true;
    } else if (userChoise === "paper") {
      userWin = computerChoice === "scissors" ? false : true;
    } else {
      userWin = computerChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoise, computerChoice);
  }
};

choices.forEach((choice) => {
  //console.log(choice);
  choice.addEventListener("click", () => {
    const userChoise = choice.getAttribute("id");
    playGame(userChoise);
  });
});
