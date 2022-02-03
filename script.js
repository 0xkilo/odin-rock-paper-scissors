function computerPlay(){
    let choiceArray = ["rock", "paper", "scissors"]
    let randomChoice = choiceArray[Math.floor(Math.random()*choiceArray.length)];

    return randomChoice
}

function playRound(playerSelection, computerSelection){

    if (computerSelection === playerSelection){
        return("It's a tie! You both chose " + playerSelection);
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return("You lost! Paper beats Rock")
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return("You win! Rock beats Scissors")
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return("You win! Paper beats Rock")
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return("You lost! Scissors beats Paper")
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return("You win! Scissors beats Paper")
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return("You lost! Rock beats Scissors")
    } else {
        return("Incorrect answer")
    }

}

let scorePlayer = 0;
let scoreComputer = 0;

function game(){


    for (let i = 0; i < 5; i++){
        const computerSelection = computerPlay();
        const playerSelection = prompt('Rock, Paper or Scissors?').toLowerCase();
        console.log(playRound(playerSelection, computerSelection));

        if (playRound(playerSelection, computerSelection).includes("win!")){
            scorePlayer += 1;
        } else if (playRound(playerSelection, computerSelection).includes("lost!")){
            scoreComputer += 1;
        } else {
            scoreComputer += 0;
        }

        if (scorePlayer >= 5){
            console.log("You win! The final score is: " + scorePlayer, " - " + scoreComputer);
        } else if (scoreComputer >= 5) {
            console.log("You lose! The final score is: " + scorePlayer, " - " + scoreComputer);
        } else{
            console.log("The current score is: " + scorePlayer, "- " + scoreComputer);
        }

    }



}

game()
