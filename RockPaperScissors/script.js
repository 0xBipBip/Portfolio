// Function to generate computer's choice
function computerChoice() {
  // Generate a random number between 0 and 2
  // 0 represents Rock, 1 represents Paper, 2 represents Scissors
  // Return the corresponding choice
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Function to determine the winner
function determineWinner(userChoice, computerChoice) {
  // If userChoice is equal to computerChoice, it's a tie
  // If userChoice beats computerChoice, user wins
  // Otherwise, computer wins
  // Return the result
    if (userChoice === computerChoice) {
      return "It's a tie!";
    } else if (
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "scissors" && computerChoice === "paper")
    ) {
      return "You win!";
    } else {
      return "Computer wins!";
    }
  }

// Function to play the game
function playGame() {
  // Prompt the user to enter their choice (Rock, Paper, or Scissors)
  // Validate the user's choice
  // Call the computerChoice() function to get the computer's choice
  // Call the determineWinner() function to determine the winner
  // Display the user's choice, computer's choice, and the result
  const userChoice = prompt(
    "Enter your choice: Rock, Paper, or Scissors"
  ).toLowerCase();
  if (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors") {
    alert("Invalid choice. Please try again.");
    return;
  }
  
  const compChoice = computerChoice();
  const result = determineWinner(userChoice, compChoice);
  
  alert(`Your choice: ${userChoice}\nComputer's choice: ${compChoice}\nResult: ${result}`);
}

// Call the playGame() function to start the game
playGame();

// function playGame(userChoice) {
//     const choices = ['rock', 'paper', 'scissors'];
//     const randomIndex = Math.floor(Math.random() * 3);
//     const computerChoice = choices[randomIndex];
  
//     let resultText = '';
  
//     if (userChoice === computerChoice) {
//       resultText = "It's a tie!";
//     } else if (
//       (userChoice === 'rock' && computerChoice === 'scissors') ||
//       (userChoice === 'paper' && computerChoice === 'rock') ||
//       (userChoice === 'scissors' && computerChoice === 'paper')
//     ) {
//       resultText = 'You win!';
//     } else {
//       resultText = 'You lose!';
//     }
  
//     const resultElement = document.getElementById('result');
//     resultElement.textContent = `You chose ${userChoice}. Computer chose ${computerChoice}. ${resultText}`;
//   }
  