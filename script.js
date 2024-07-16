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

const resultDiv = document.querySelector("#results");

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        resultDiv.innerText = "It's a draw!";
        return drawScore++;
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
        resultDiv.innerText = "You win! Rock beats Scissors!";
        return humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        resultDiv.innerText = "You win! Paper beats rock!";
        return humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        resultDiv.innerText = "You win! Scissors beats paper!";
        return humanScore++;
    } else {
        resultDiv.innerText = `You lose! ${computerChoice} beats ${humanChoice}!`;
        return computerScore++;
    }
}

const announceWinner = document.querySelector("#winner");

const rock = document.querySelector("#rock");
rock.addEventListener("click", () => {
    playRound("rock", getComputerChoice())
    if (humanScore === 5) {
        alert(`PLAYER WİNS ! \nPlayer score: ${humanScore} \nComputer score ${computerScore} \nDraw: ${drawScore}`);
        playAgain();
    }
    else if (computerScore === 5) {
        alert(`COMPUTER WİNS ! \nPlayer score: ${humanScore} \nComputer score ${computerScore} \nDraw: ${drawScore}`);
        playAgain();
    }
});

const paper = document.querySelector("#paper");
paper.addEventListener("click", () => {
    playRound("paper", getComputerChoice())
    if (humanScore === 5) {
        alert(`PLAYER WİNS ! \nPlayer score: ${humanScore} \nComputer score ${computerScore} \nDraw: ${drawScore}`);
        playAgain();
    }
    else if (computerScore === 5) {
        alert(`COMPUTER WİNS ! \nPlayer score: ${humanScore} \nComputer score ${computerScore} \nDraw: ${drawScore}`);
        playAgain();
    }
});

const scissors = document.querySelector("#scissors")
scissors.addEventListener("click", () => {
    playRound("scissors", getComputerChoice())
    if (humanScore === 5) {
        alert(`PLAYER WİNS ! \nPlayer score: ${humanScore} \nComputer score ${computerScore} \nDraw: ${drawScore}`);
        playAgain();
    }
    else if (computerScore === 5) {
        alert(`COMPUTER WİNS ! \nPlayer score: ${humanScore} \nComputer score ${computerScore} \nDraw: ${drawScore}`);
        playAgain();
    }
});

function restart() {
    resultDiv.innerText = "";
    announceWinner.innerText = "";
    humanScore = 0;
    computerScore = 0;
    drawScore = 0;
}
function playAgain() {
    const confirmPlayAgain = confirm("Would you like to play again ?");
    if (confirmPlayAgain == true) {
        restart();
    }
}

