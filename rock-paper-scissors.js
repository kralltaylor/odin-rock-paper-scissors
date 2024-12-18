let humanScore = 0;
let computerScore = 0;
let round = 1;

playGame();


function playGame() {
    humanScore = 0;
    computerScore = 0;
    round = 1;
    let result = "";
    while (round <= 5) {
        result = playRound(getHumanChoice(), getComputerChoice());
        console.log(result + "\n\nCurrent Score\n\nYou: " + humanScore + "\nComputer: " + computerScore);
        alert(result + "\n\nCurrent Score\n\nYou: " + humanScore + "\nComputer: " + computerScore);
         round++;
    }
    console.log("Final Score\nYou: " + humanScore + "\nComputer: " + computerScore);
    alert("Final Score\nYou: " + humanScore + "\nComputer: " + computerScore);
    playAgain();
}

function playRound(humanChoice, computerChoice) {
    console.log("Round " + round + "\n\nYour Choice: " + humanChoice + "\nComputer Choice: " + computerChoice);

    if (humanChoice === computerChoice) {
        return "It's a tie!";
    } else if (humanChoice === "Rock") {
        if (computerChoice === "Scissors") {
            humanScore++;
            return "You win! Rock crushes Scissors.";          
        } else {
            computerScore++;
            return "You lose! Paper covers Rock."; 
        }
    } else if (humanChoice === "Paper") {
        if (computerChoice === "Rock") {
            humanScore++;
            return "You win! Paper covers Rock."; 
        } else {
            computerScore++;
            return "You lose! Scissors cuts Paper."; 
        }
    } else if (humanChoice === "Scissors") {
        if (computerChoice === "Paper") {
            humanScore++;
            return "You win! Scissors cuts Paper."; 
        } else {
            computerScore++;
            return "You lose! Rock crushes scissors."; 
        }
    }
}

function playAgain(){
    let playAgain = "";
    do {
        playAgain = prompt("Would you like to play again? (Yes/No)");
        if (playAgain.toLowerCase() === "yes" || playAgain.toLowerCase() === "y") {
            playGame();
        }
        else if (playAgain.toLowerCase() === "no" || playAgain.toLowerCase() === "n") {
            console.log("Thanks for playing!");
            alert("Thanks for playing!");
        }
        else {
            alert("Invalid input. Please enter Yes or No.");
        }
    } while (playAgain.toLowerCase() != "yes" && playAgain.toLowerCase() != "y" && playAgain.toLowerCase() != "no" && playAgain.toLowerCase() != "n");
}


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
    let humanChoice = "";
    do {
        humanChoice = prompt("Round " + round + "\nRock, Paper, or Scissors?");
        if (humanChoice.toLowerCase() === "rock") {
            return "Rock";
        }
        else if (humanChoice.toLowerCase() === "paper") {
            return "Paper";
        }
        else if (humanChoice.toLowerCase() === "scissors") {
            return "Scissors";
        }
        else {
            alert("Invalid input. Please enter Rock, Paper, or Scissors.");
        }
    } while (humanChoice.toLowerCase() != "rock" && humanChoice.toLowerCase() != "paper" && humanChoice.toLowerCase() != "scissors");
}