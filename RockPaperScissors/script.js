// Comentarios en JS

function playGame(userChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    const computerChoice = choices[randomIndex];
  
    let resultText = '';
  
    if (userChoice === computerChoice) {
      resultText = "It's a tie!";
    } else if (
      (userChoice === 'rock' && computerChoice === 'scissors') ||
      (userChoice === 'paper' && computerChoice === 'rock') ||
      (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
      resultText = 'You win!';
    } else {
      resultText = 'You lose!';
    }
  
    const resultElement = document.getElementById('result');
    resultElement.textContent = `You chose ${userChoice}. Computer chose ${computerChoice}. ${resultText}`;
  }
  