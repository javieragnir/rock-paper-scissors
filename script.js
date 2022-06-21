// Main Function

let playerSelection = prompt("Please enter your hand", "rock, paper, or scissors");
let computerSelection = computerPlay();

console.log(playerSelection);
console.log(computerSelection);

// Helper Functions

function computerPlay() {
    number = Math.floor(Math.random() * 3);
    if (number == 0) {
        return 'rock';
    } else if (number == 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toUpperCase()
    return;
}