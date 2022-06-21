// Main Function

let playerSelection = prompt("Please enter your hand", "Rock, Paper, or Scissors");
let computerSelection = computerPlay();

console.log(playerSelection);
console.log(computerSelection);

playRound(playerSelection, computerSelection);

// Helper Functions

function computerPlay() {
    number = Math.floor(Math.random() * 3);
    if (number == 0) {
        return 'Rock';
    } else if (number == 1) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    let key;
    if (playerSelection === computerSelection) {
        key = 0;
    } else if (playerSelection === 'Rock' && computerSelection === 'Scissors'
    || playerSelection === 'Paper' && computerSelection === 'Rock' 
    || playerSelection === 'Scissors' && computerSelection === 'Paper') {
        key = 1;
    } else {
        key = 2;
    }

    if (key === 0) {
        console.log(`You tied! You both selected ${playerSelection}.`)
    } else if (key === 1) {
        console.log(`You won! ${playerSelection} beats ${computerSelection}.`)
    } else {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}.`)
    }

    return;
}