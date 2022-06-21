// Main Function
game(5);

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

function playRound() {
    // Get play inputs from user and computer
    let playerSelection = prompt("Please enter your hand", "Rock, Paper, or Scissors");
    let computerSelection = computerPlay(); 

    // Format user input
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();

    // Determine result of round
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

    // Print results of round
    if (key === 0) {
        console.log(`You tied! You both selected ${playerSelection}.`);
    } else if (key === 1) {
        console.log(`You won! ${playerSelection} beats ${computerSelection}.`);
    } else {
        console.log(`You lose! ${computerSelection} beats ${playerSelection}.`)
    }
    // Return result of round
    return key;
}

function game(rounds) {
    playerWins = 0;
    computerWins = 0;

    // Simulate rounds
    for (let i = 0; i < rounds; i++) {
        result = playRound();
        if (result === 1) {
            playerWins++;
        } else if (result === 2) {
            computerWins++;
        }
    }
    // Print winner
    if (playerWins > computerWins) {
        console.log(`You win! You: ${playerWins}, Computer: ${computerWins}.`);
    } else if (playerWins < computerWins) {
        console.log(`You lose! You: ${playerWins}, Computer: ${computerWins}.`);
    } else {
        console.log(`Tie! You: ${playerWins}, Computer: ${computerWins}.`);
    }
}