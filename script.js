/* // Main Function
game(5); */



const buttons = document.querySelectorAll('Button');
buttons.forEach(button => 
    button.addEventListener('click', () => playRound(button.textContent)))

const roundSummary = document.querySelector('#roundSummary');

const finalResult = document.querySelector('#finalResult');

// Game tracker
let playerWins = 0;
let computerWins = 0;

const playerCount = document.querySelector('#playerScore');
const computerCount = document.querySelector('#computerScore');

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

function playRound(playerSelection) {
    // Get play inputs from user and computer
    // let playerSelection = prompt("Please enter your hand", "Rock, Paper, or Scissors");
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
        roundSummary.textContent = `You tied! You both selected ${playerSelection}.`;
    } else if (key === 1) {
        roundSummary.textContent = `You won! ${playerSelection} beats ${computerSelection}.`;
        playerWins++;
        playerCount.textContent = playerWins;
    } else {
        roundSummary.textContent = `You lose! ${computerSelection} beats ${playerSelection}.`;
        computerWins++
        computerCount.textContent = computerWins;
    }

    // Print final results
    if (playerWins === 5 || computerWins === 5) {
        if (playerWins === 5) {
            finalResult.textContent = `You win!`;
        }
        if (computerWins === 5) {
            finalResult.textContent = `You lose!`;
        }
        buttons.forEach(button => button.disabled = true);
    }


    // Return result of round
    return;
}

/* function game(rounds, playerSelection) {
    playerWins = 0;
    computerWins = 0;

    // Simulate rounds
    while (playerWins < 5 && computerWins < 5) {
        result = playRound(playerSelection);
        if (result === 1) {
            playerWins++;
        } else if (result === 2) {
            computerWins++;
        }
    }
    // Print winner
    if (playerWins > computerWins) {
        finalResult.textContent = `You win!`;
    } else {
        finalResult.textContent = `You lose!`;
    }

} */