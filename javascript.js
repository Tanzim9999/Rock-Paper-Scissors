let rock = "rock";
let paper = "paper";
let scissors = "scissors";
let humanScore = 0;
let computerScore = 0;
playRound = (humanChoice, computerChoice) => {
  if (humanChoice === rock && computerChoice === scissors) {
    console.log("You Win! Rock beats Scissors");
    humanScore++;
  } else if (humanChoice === scissors && computerChoice === rock) {
    console.log("You Lose! Rock beats Scissors");
    computerScore++;
  } else if (humanChoice === scissors && computerChoice === paper) {
    console.log("You Win! Scissors beats Papers");
    humanScore++;
  } else if (humanChoice === paper && computerChoice === scissors) {
    console.log("You Lose! Scissors beats Papers");
    computerScore++;
  } else if (humanChoice === paper && computerChoice === rock) {
    console.log("You Win! Paper beats Rock");
    humanScore++;
  } else if (humanChoice === rock && computerChoice === paper) {
    console.log("You Lose! Paper beats Rock");
    computerScore++;
  }
  else if (humanChoice === computerChoice) {console.log("It's a draw on this round.")}
};

playGame = () => {
  getComputerChoice = () => {
    let number = (Math.random() * 10 + 1).toFixed(2);
    if (number <= 3.33) {
      return rock;
    } else if (number <= 6.66) {
      return paper;
    } else {
      return scissors;
    }
  };
  getHumanChoice = () => {
    let choice = prompt("").toLowerCase();
    return choice;
  };

  let humanSelection = getHumanChoice();
  let computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
  console.log(humanScore, computerScore);

  humanSelection = getHumanChoice();
  computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
  console.log(humanScore, computerScore);

  humanSelection = getHumanChoice();
  computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
  console.log(humanScore, computerScore);

  humanSelection = getHumanChoice();
  computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
  console.log(humanScore, computerScore);

  humanSelection = getHumanChoice();
  computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
  console.log(humanScore, computerScore);
};
playGame();
