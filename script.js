const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getHumanChoice() {
    let userChoice;
    do {
        userChoice = prompt("Your choice: ");
    } while (!choices.includes(userChoice));

    return userChoice;

}
