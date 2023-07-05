const choices = ["Rock", "Paper", "Scissors"];

// How the computer chooses
function computerChoice() {
    return choices[(Math.floor(Math.random() * choices.length))];
}

let playerChoice = prompt("Please choose a selection");

// Call the function to get a choice from the computer
computerChoice(choices);

// Ignore these
console.log(computerChoice(choices));
console.log(playerChoice);


function playRound(playerChoice, computerChoice) {
    if ((playerChoice === "Rock") && (computerChoice === "Paper")) {
        return "You Lose";
    }
    else if((playerChoice === "Rock") && (computerChoice === "Scissors")) {
        return "You Win";
    }
    else if ((playerChoice === "Rock") && (computerChoice === "Rock")) {
        return "Tie. No Winner";
    }
    else if ((playerChoice === "Scissors") && (computerChoice === "Rock")) {
        return "You Lose";
    }
    else if ((playerChoice === "Scissors") && (computerChoice === "Scissors")) {
        return "Tie. No Winner";
    }
    else if ((playerChoice === "Scissors") && (computerChoice === "Paper")) {
        return "You Win";
    }
    else if ((playerChoice === "Paper") && (computerChoice === "Paper")) {
        return "Tie. No Winner";
    }
    else if ((playerChoice === "Paper") && (computerChoice === "Rock")) {
        return "You Win";
    }
    else if ((playerChoice === "Paper") && (computerChoice === "Scissors")) {
        return "You Lose";
    }
}

// Call the function to play a round
playRound(playerChoice, computerChoice);
console.log(playRound(playerChoice, computerChoice));

// function game(playRound), play 5 times, keep track of score, return winner