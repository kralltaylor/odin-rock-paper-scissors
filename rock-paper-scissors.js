let humanScore = 0;
let computerScore = 0;
let round = 1;

let gameWindow = document.createElement("div");
gameWindow.id = "game-window";
gameWindow.style.border = "solid black 5px";
gameWindow.style.padding = "20px";
gameWindow.style.display = "flex";
gameWindow.style.flexDirection = "column";
gameWindow.style.maxWidth = "40%";
gameWindow.style.minWidth = "300px";
gameWindow.style.flex = "1 1 auto";
gameWindow.style.alignItems = "center";
let body = document.querySelector("body");
body.style.display = "flex";
body.style.justifyContent = "center";
body.appendChild(gameWindow);

let header = document.createElement("h1");
header.style.textAlign = "center";
header.style.borderBottom = "solid black 5px";
header.style.paddingBottom = "10px";
header.style.fontSize = "40px";
header.textContent = `Rock, Paper, Scissors`;

let scoreboard = document.createElement("div");
scoreboard.style.display = "flex";
scoreboard.style.flexDirection = "column";
scoreboard.style.alignItems = "center";
let scoreHeader = document.createElement("h2");
scoreHeader.textContent = "Current Score";
scoreHeader.style.margin = "0px";
let scoresDiv = document.createElement("div");
scoresDiv.style.display = "flex";
scoresDiv.style.justifyContent = "space-between";
scoresDiv.style.gap = "10px";
let scoreboardLeft = document.createElement("div");
scoreboardLeft.style.display = "flex";
scoreboardLeft.style.flexDirection = "column";
scoreboardLeft.style.alignItems = "center";
scoreboardLeft.style.padding = "5px";
let humanScoreHeader = document.createElement("h3");
humanScoreHeader.textContent = "Player";
humanScoreHeader.style.margin = "10px";
let humanPoints = document.createElement("p");
humanPoints.textContent = humanScore;
humanPoints.style.margin = "0";
let scoreboardRight = document.createElement("div");
scoreboardRight.style.display = "flex";
scoreboardRight.style.flexDirection = "column";
scoreboardRight.style.alignItems = "center";
scoreboardRight.style.padding = "5px";
let computerScoreHeader = document.createElement("h3");
computerScoreHeader.textContent = "Computer";
computerScoreHeader.style.margin = "10px";
let computerPoints = document.createElement("p");
computerPoints.textContent = computerScore;
computerPoints.style.margin = "0";


scoreboardLeft.appendChild(humanScoreHeader);
scoreboardLeft.appendChild(humanPoints);
scoreboardRight.appendChild(computerScoreHeader);
scoreboardRight.appendChild(computerPoints);
scoreboard.appendChild(scoreHeader);
scoreboard.appendChild(scoresDiv);
scoresDiv.appendChild(scoreboardLeft);
scoresDiv.appendChild(scoreboardRight);



let options = document.createElement("div");
options.id = "options";
options.style.display = "flex";
options.style.justifyContent = "space-around";
options.style.width = "100%";
options.style.gap = "5px";
options.style.flexShrink = "0";
options.style.alignSelf = "center";

let rockButton = document.createElement("button");
rockButton.id = "rock";
rockButton.textContent = "Rock";
rockButton.style.width = "33%";
rockButton.style.height = "40px";
rockButton.style.fontSize = "11pt";

let paperButton = document.createElement("button");
paperButton.id = "paper";
paperButton.textContent = "Paper";
paperButton.style.width = "33%";
paperButton.style.height = "40px";
paperButton.style.fontSize = "11pt";

let scissorsButton = document.createElement("button");
scissorsButton.id = "scissors";
scissorsButton.textContent = "Scissors";
scissorsButton.style.width = "33%";
scissorsButton.style.height = "40px";
scissorsButton.style.fontSize = "11pt";

options.appendChild(rockButton);
options.appendChild(paperButton);
options.appendChild(scissorsButton);

let gameText = document.createElement("p");
gameText.style.fontSize = "18pt";
gameText.style.textAlign = "center";
gameText.textContent = "Make a Choice";
let nextRound = document.createElement("button");
nextRound.textContent = "Next Round";
nextRound.style.width = "50%";
nextRound.style.fontSize = "16pt";
nextRound.style.height = "50px";

let startGame = document.createElement("button");
startGame.textContent = "Start Game";
startGame.style.width = "50%";
startGame.style.fontSize = "16pt";
startGame.style.height = "50px";

gameWindow.appendChild(header);
gameWindow.appendChild(startGame);

let playAgainButton = document.createElement("button");
playAgainButton.textContent = "Play Again";
playAgainButton.style.width = "50%";
playAgainButton.style.padding = "10px";
playAgainButton.style.fontSize = "20pt";
playAgainButton.style.height = "50pt";

startGame.addEventListener("click", (e) => {
    round = 1;
    header.textContent = `Round ${round}`;
    header.style.color = "black";
    humanScore = 0;
    computerScore = 0;
    humanPoints.textContent = humanScore;
    computerPoints.textContent = computerScore;
    scoreHeader.textContent = "Current Score";
    gameWindow.removeChild(startGame);
    gameWindow.appendChild(scoreboard);
    gameWindow.appendChild(gameText);
    gameWindow.appendChild(options);
    
});

options.addEventListener("click", (e) => {
    let choice = e.target;

    switch(choice.id) {
        case 'rock':
            playRound("Rock", getComputerChoice());
            break;
        case 'paper':
            playRound("Paper", getComputerChoice());
            break;   
        case 'scissors':
            playRound("Scissors", getComputerChoice());
            break;       
    }
});

nextRound.addEventListener("click", (e) => {
    round++;
    header.textContent = `Round ${round}`;
    gameText.textContent = "Make a Choice";
    gameWindow.removeChild(nextRound);
    gameWindow.appendChild(options);
    
});

playAgainButton.addEventListener("click", (e) => {
    round = 1;
    header.textContent = `Rock, Paper, Scissors`;
    header.style.color = "black";
    humanScore = 0;
    computerScore = 0;
    humanPoints.textContent = humanScore;
    computerPoints.textContent = computerScore;
    scoreHeader.textContent = "Current Score";
    gameWindow.removeChild(playAgainButton);
    gameWindow.removeChild(gameText);
    gameWindow.removeChild(scoreboard);
    gameWindow.appendChild(startGame);    
});



function playRound(humanChoice, computerChoice) {

    if (humanChoice === computerChoice) {
        gameWindow.removeChild(options);
        gameText.textContent = "It's a tie!";
        gameWindow.appendChild(nextRound);
    } else if (humanChoice === "Rock") {
        if (computerChoice === "Scissors") {
            humanScore++;
            humanPoints.textContent = humanScore;
            computerPoints.textContent = computerScore;
            gameWindow.removeChild(options);
            gameText.textContent = "You win! Rock crushes Scissors.";
        } else {
            computerScore++;
            humanPoints.textContent = humanScore;
            computerPoints.textContent = computerScore;
            gameWindow.removeChild(options);
            gameText.textContent = "You lose! Paper covers Rock.";
        }
    } else if (humanChoice === "Paper") {
        if (computerChoice === "Rock") {
            humanScore++;
            humanPoints.textContent = humanScore;
            computerPoints.textContent = computerScore;
            gameWindow.removeChild(options);
            gameText.textContent = "You win! Paper covers Rock.";
        } else {
            computerScore++;
            humanPoints.textContent = humanScore;
            computerPoints.textContent = computerScore;
            gameWindow.removeChild(options);
            gameText.textContent = "You lose! Scissors cuts Paper.";
        }
    } else if (humanChoice === "Scissors") {
        if (computerChoice === "Paper") {
            humanScore++;
            humanPoints.textContent = humanScore;
            computerPoints.textContent = computerScore;
            gameWindow.removeChild(options);
            gameText.textContent = "You win! Scissors cuts Paper.";
        } else {
            computerScore++;
            humanPoints.textContent = humanScore;
            computerPoints.textContent = computerScore;
            gameWindow.removeChild(options);
            gameText.textContent = "You lose! Rock crushes Scissors.";
        }
    }
    if (checkForWinner()){
        displayEndScreen();
    } else {
        gameWindow.appendChild(nextRound);  
    }       
}

function checkForWinner() {
    if (humanScore === 5 || computerScore === 5){
        return true;
    }
    else return false;
}

function displayEndScreen() {
    gameWindow.appendChild(playAgainButton)
    if (humanScore === 5) {
        header.textContent = "YOU WON";
        header.style.color = "green";
        scoreHeader.textContent = "Final Score";
    } else {
        header.textContent = "YOU LOSE"
        header.style.color = "red";
        scoreHeader.textContent = "Final Score";
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