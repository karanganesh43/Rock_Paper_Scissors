// Function to generate computer's choice
function getRandomChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// Get references to the elements
const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');
const playerScoreElement = document.getElementById('playerScore');
const computerScoreElement = document.getElementById('computerScore');
const roundResultElement = document.getElementById('roundResult');
const gameResultElement = document.getElementById('gameResult');
const playerChoiceElement = document.getElementById('playerChoice');
const computerChoiceElement = document.getElementById('computerChoice');

// Initialize scores
let playerScore = 0;
let computerScore = 0;

// Attach click event listeners to the buttons
rockButton.addEventListener('click', function () {
    playRound('rock');
});
paperButton.addEventListener('click', function () {
    playRound('paper');
});
scissorsButton.addEventListener('click', function () {
    playRound('scissors');
});

// Function to play a round
function playRound(playerChoice) {
    // Generate a random computer choice
    const computerChoice = getRandomChoice();
    console.log(computerChoice);

    // Determine the winner of the round
    let roundResult;
    if (playerChoice === computerChoice) {
        roundResult = "It's a tie!";
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        roundResult = 'You win!';
        playerScore++;
    } else {
        roundResult = 'Computer wins!';
        computerScore++;
    }

    // Update the score display
    playerScoreElement.textContent = 'Player: ' + playerScore;
    computerScoreElement.textContent = 'Computer: ' + computerScore;
    playerChoiceElement.textContent = 'Player choice: ' + playerChoice;
    computerChoiceElement.textContent = 'Computer choice: ' + computerChoice;

    // Display the round result
    roundResultElement.textContent = roundResult;

    // Check if a player has reached 5 points
    if (playerScore === 5 || computerScore === 5) {
        // Determine the winner of the game
        const gameResult = (playerScore === 5) ? 'Player wins the game!' : 'Computer wins the game!';
        gameResultElement.textContent = gameResult;

        // Disable the buttons
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
    }
}