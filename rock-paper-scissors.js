let humanScore = 0;
let computerScore = 0;
let rounds = 0;

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);

function playGame() {
    rounds++;
    console.log("Round " + rounds)
    while (rounds <= 5) {
        // const humanSelection = getHumanChoice();
        // const computerSelection = getComputerChoice();
        playRound(getHumanChoice(), getComputerChoice());

    }
}

function playRound(humanChoice, computerChoice) {
    console.log("Your Choice: " + humanChoice);
    console.log("Computer Choice: " + computerChoice);

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
        return "Tie";
    } else if (humanChoice === "Rock") {
        if (computerChoice === "Scissors") {
            console.log("You win! Rock crushes Scissors.")
            return "Win";
        } else {
            console.log("You lose! Paper covers Rock.");
            return "Lose";
        }
    } else if (humanChoice === "Paper") {
        if (computerChoice === "Rock") {
            console.log("You win! Paper covers Rock.")
            return "Win";
        } else {
            console.log("You lose! Scissors cuts Paper.");
            return "Lose";
        }
    } else if (humanChoice === "Scissors") {
        if (computerChoice === "Paper") {
            console.log("You win! Scissors cuts Paper.")
            return "Win";
        } else {
            console.log("You lose! Rock crushes scissors.");
            return "Lose";
        }
    }
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