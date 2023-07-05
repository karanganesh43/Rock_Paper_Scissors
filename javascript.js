// Function to generate computer's choice
function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
  }
  
  // Function to play a single round of Rock Paper Scissors
  function playRound(playerSelection, computerSelection) {
    const formattedPlayerSelection = playerSelection.toLowerCase();
  
    if (
      (formattedPlayerSelection === 'rock' && computerSelection === 'Scissors') ||
      (formattedPlayerSelection === 'paper' && computerSelection === 'Rock') ||
      (formattedPlayerSelection === 'scissors' && computerSelection === 'Paper')
    ) {
      return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else if (
      (formattedPlayerSelection === 'rock' && computerSelection === 'Paper') ||
      (formattedPlayerSelection === 'paper' && computerSelection === 'Scissors') ||
      (formattedPlayerSelection === 'scissors' && computerSelection === 'Rock')
    ) {
      return `You Lose! ${computerSelection} beats ${playerSelection}`;
    } else {
      return "It's a Tie!";
    }
  }
  
  // Function to play a 5-round game
  function game() {
    let playerScore = 0;
    let computerScore = 0;
  
    for (let round = 1; round <= 5; round++) {
      const playerSelection = prompt(`Round ${round}: Choose rock, paper, or scissors:`);
      const computerSelection = getComputerChoice();
  
      console.log(`You chose: ${playerSelection}`);
      console.log(`Computer chose: ${computerSelection}`);
  
      const result = playRound(playerSelection, computerSelection);
      console.log(result);
  
      if (result.includes('Win')) {
        playerScore++;
      } else if (result.includes('Lose')) {
        computerScore++;
      }
    }
  
    console.log('----- GAME OVER -----');
    console.log(`Final Score - You: ${playerScore}, Computer: ${computerScore}`);
  
    if (playerScore > computerScore) {
      console.log('Congratulations! You win the game!');
    } else if (playerScore < computerScore) {
      console.log('Computer wins the game! Better luck next time!');
    } else {
      console.log("It's a tie! The game ended in a draw.");
    }
  }
  
  // Start the game
  game();
  