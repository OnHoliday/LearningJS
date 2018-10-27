const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'scissor' || userInput === 'paper') {
    return userInput;
  } else { console.log('You choose poorly!')}
}

function getComputerChoice() {
 compChoise = Math.floor(Math.random() * 3) ;
 if (compChoise === 0) {
   return 'rock';
 } else if ( compChoise === 1 ) {
   return 'scissor';
 } else { return 'paper'};
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    console.log('Its a tie!')
  } else if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
        console.log('Computer win!')
        } else {console.log('You win!')}
  } else if (userChoice === 'paper') {
    if (computerChoice === 'scissor') {
        console.log('Computer win!')
        } else {console.log('You win!')}
  } else { if (computerChoice === 'rock') {
        console.log('Computer win!')
        } else {console.log('You win!')}
    
  }
}

function playGame() {
  a = getUserChoice('Scissor');
  console.log('Your choice is: ' + a);
  b = getComputerChoice();
  console.log('Computer choice is: ' + b);
  determineWinner(a,b);
}
playGame()
