let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    console.log("Your Choice: " + humanChoice);
    console.log("Computer Choice: " + computerChoice);

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (humanChoice === "Rock") {
        if (computerChoice === "Scissors") {
            console.log("You win! Rock crushes Scissors.")
        } else {
            console.log("You lose! Paper covers Rock.");
        }
    } else if (humanChoice === "Paper") {
        if (computerChoice === "Rock") {
            console.log("You win! Paper covers Rock.")
        } else {
            console.log("You lose! Scissors cuts Paper.");
        }
    } else if (humanChoice === "Scissors") {
        if (computerChoice === "Paper") {
            console.log("You win! Scissors cuts Paper.")
        } else {
            console.log("You lose! Rock crushes scissors.");
        }
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);

function getComputerChoice() {
    const computerChoice = Math.random();
    if (computerChoice < 0.34) 
        return "Rock";
    else if (computerChoice < 0.67) 
        return "Paper";
    else 
        return "Scissors";
}

function getHumanChoice (){
    const humanChoice = prompt("Rock, Paper, or Scissors?");
    if (humanChoice.toLowerCase() === "rock")
        return "Rock";
    else if (humanChoice.toLowerCase() === "paper")
        return "Paper";
    else 
        return "Scissors";
}