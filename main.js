//1-piedra 2-papel 3-tijeras

function getComputerChoice() {
  let options = ['rock','paper','scissors']
  return  options[Math.floor(Math.random() * options.length)]
}

function getHumanChoice() {
  let user = prompt('Enter rock, paper, or scissors')
  return user.toLowerCase()
}

 function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice,computerChoice) {
    if(humanChoice === computerChoice) {
      console.log('Its a tie, play again')
    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
      console.log('You won rock beats scissors')
      humanScore++
    } else if(humanChoice === 'paper' && computerChoice === 'rock') {
      console.log('You won paper beats rock')
      humanScore++
    } else if(humanChoice === 'scissors' && computerChoice === 'paper') {
      console.log('You won scissors beats paper')
      humanScore++
    } else {
      console.log("You lost against Computer!")
      computerScore++
    }
  }

  for(let i = 0; i < 5; i++) {
    console.log('ronda' + (i+1))
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection)
  }
  if(humanScore > computerScore) {
    console.log('You are the winner of the game with ' + humanScore + ' points')
  } else {
    console.log('Computer has won the game with ' + computerScore + ' points.')
  }
 }

 playGame();

