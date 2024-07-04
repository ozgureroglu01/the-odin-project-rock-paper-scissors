const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getHumanChoice() {
    let userChoice;
    do {
        userChoice = prompt("Your choice: ").toLowerCase();
    } while (!choices.includes(userChoice));

    return userChoice;

}

let humanScore = 0;
let computerScore = 0;
let drawScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("It's a draw!");
        return drawScore++;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats Scissors!");
        return humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats rock!");
        return humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beats paper!");
        return humanScore++;
    } else {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
        return computerScore++;
    }
}



function playGame(rounds) {
    for (let i = 0; i < rounds; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    console.log(`Player score: ${humanScore}, Computer score ${computerScore}, Draw: ${drawScore}`);
}

playGame(5);