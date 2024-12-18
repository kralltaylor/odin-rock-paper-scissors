let humanScore = 0;
let computerScore = 0;
let round = 1;

playGame();


function playGame() {
    let result = "";
    while (round <= 5) {
        // const humanSelection = getHumanChoice();
        // const computerSelection = getComputerChoice();
        result = playRound(getHumanChoice(), getComputerChoice());
        console.log(result + "\n\nCurrent Score\n\nYou: " + humanScore + "\nComputer: " + computerScore);
        alert(result + "\n\nCurrent Score\n\nYou: " + humanScore + "\nComputer: " + computerScore);
         round++;
    }
    console.log("Final Score\nYou: " + humanScore + "\nComputer: " + computerScore);
    alert("Final Score\nYou: " + humanScore + "\nComputer: " + computerScore);
    // playAgain();
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

// function playAgain(){
//     let playAgain = "";
//     do {
//         playAgain = prompt("Would you like to play again? (Yes/No)");
//         if (humanChoice.toLowerCase() === "yes") {
//             humanScore
//         }
//         else if (humanChoice.toLowerCase() === "paper") {
//             return "Paper";
//         }
//         else if (humanChoice.toLowerCase() === "scissors") {
//             return "Scissors";
//         }
//         else {
//             alert("Invalid input. Please enter Rock, Paper, or Scissors.");
//         }
//     } while (humanChoice.toLowerCase() != "rock" && humanChoice.toLowerCase() != "paper" && humanChoice.toLowerCase() != "scissors");
// }


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
        humanChoice = prompt("Rock, Paper, or Scissors?");
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