let rock = "rock";
let paper = "paper";
let scissors = "scissors";
let humanScore = 0;
let computerScore = 0;

let updateScore = () =>
{
  document.getElementById("humanScore").textContent = humanScore
  document.getElementById("computerScore").textContent = computerScore

  
}
let getComputerChoice = () => {
  let number = (Math.random() * 10 + 1).toFixed(2);
  if (number <= 3.33) {
    return rock;
  } else if (number <= 6.66) {
    return paper;
  } else {
    return scissors;
  }
};
let playRound = (humanChoice, computerChoice) => {
  if (humanChoice === rock && computerChoice === scissors) {
    document.getElementById("comment").textContent = ("You Win! Rock beats Scissors");
    humanScore++;
  } else if (humanChoice === scissors && computerChoice === rock) {
    document.getElementById("comment").textContent = ("You Lose! Rock beats Scissors");
    computerScore++;
  } else if (humanChoice === scissors && computerChoice === paper) {
    document.getElementById("comment").textContent = ("You Win! Scissors beats Papers");
    humanScore++;
  } else if (humanChoice === paper && computerChoice === scissors) {
    document.getElementById("comment").textContent = ("You Lose! Scissors beats Papers");
    computerScore++;
  } else if (humanChoice === paper && computerChoice === rock) {
    document.getElementById("comment").textContent = ("You Win! Paper beats Rock");
    humanScore++;
  } else if (humanChoice === rock && computerChoice === paper) {
    document.getElementById("comment").textContent = ("You Lose! Paper beats Rock");
    computerScore++;
  } else if (humanChoice === computerChoice) {
    document.getElementById("comment").textContent = ("It's a draw on this round.");
  }
  updateScore()
  if (humanScore === 5){
    document.getElementById("comment").textContent = "You're the Winner"
    humanScore = 0;
    computerScore = 0;
  }
  else if (computerScore === 5 ){
    document.getElementById("comment").textContent = "Computer is the Winner"
    humanScore = 0;
    computerScore = 0;
  }
};
document.getElementById("btn1").addEventListener("click", () => {
  let currentComputerChoice = getComputerChoice();
  playRound(rock,currentComputerChoice)
});
document.getElementById("btn2").addEventListener("click", () => {
  let currentComputerChoice = getComputerChoice();
  playRound(scissors,currentComputerChoice)
});
document.getElementById("btn3").addEventListener("click", () => {
  let currentComputerChoice = getComputerChoice();
  playRound(paper,currentComputerChoice)
});

// playGame = () => {
//   getComputerChoice = () => {
//     let number = (Math.random() * 10 + 1).toFixed(2);
//     if (number <= 3.33) {
//       return rock;
//     } else if (number <= 6.66) {
//       return paper;
//     } else {
//       return scissors;
//     }
//   };
//   getHumanChoice = () => {
//     let choice = prompt("").toLowerCase();
//     return choice;
//   };

//   let humanSelection = getHumanChoice();
//   let computerSelection = getComputerChoice();
//   playRound(humanSelection, computerSelection);
//   document.getElementById("comment").textContent = (humanScore, computerScore);

// };
// playGame();
