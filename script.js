function computerPlay(){
    const gameArray = ['Rock', 'Paper', 'Scissors']
    let randomChoice = gameArray[Math.floor(Math.random()*gameArray.length)];

    return(randomChoice);
}

function playRound(playerSelection, computerSelection){



    if (playerSelection === computerSelection){
        return('Its a tie! you both chose ' + playerSelection);
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return('You win! Rock beats Scissors');
    } else if (playerSelection === 'rock' && computerSelection === 'paper'){
        return('You lose! Rock loses to Paper');
    } else if (playerSelection === 'paper' && computerSelection === 'rock'){
        return('You win! Paper beats Rock');
    } else if (playerSelection === 'paper' && computerSelection === 'scissors'){
        return('You lose! Paper loses to Scissors');
    } else if (playerSelection === 'scissors' && computerSelection === 'paper'){
        return('You win! Scissors beats Paper');
    } else if (playerSelection === 'scissors' && computerSelection === 'rock'){
        return('You lose! Scissors loses to Rock');
    } else{
        return('Incorrect answer, try again.')
    }
}


function game(){
    const computerSelection = computerPlay().toLowerCase()
    let playerSelection = prompt('Rock, Paper or Scissors?:').toLowerCase()

    console.log(playRound(playerSelection, computerSelection));
    
}

game()
game()
game()
game()
game()

