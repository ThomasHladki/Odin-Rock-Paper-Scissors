let playerScore = 0;
let computerScore = 0;
function getComputerChoice(){

    const numOfChoices =3;
    let choice = Math.floor(Math.random()*numOfChoices);
    if(choice==0){
        return "rock";
    }else if(choice==1){
        return "paper";
    }else if(choice==2){
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection){

    if(playerSelection=="rock"){
        if(computerSelection=="rock"){
            return "It's a tie! Rock doesn't beat Rock!";
        }else if(computerSelection=="paper"){
            computerScore++;
            return "You lose! Paper beats Rock!";
        }else if(computerSelection=="scissors"){

            return "You win! Rock beats Scissors!";
        }
    }else if(playerSelection=="paper"){
        if(computerSelection=="rock"){
            playerScore++;
            return "You win! Paper beats Rock!";
        }else if(computerSelection=="paper"){
            return "Its a tie! Paper doesn't beat Paper!"
        }else if(computerSelection=="scissors"){
            computerScore++;
            return "You lose! Scissors beats Paper!"
        }
    }else if(playerSelection=="scissors"){
        if(computerSelection=="rock"){
            computerScore++;
            return "You lose! Rock beats Scissors!"
        }else if(computerSelection=="paper"){
            playerScore++;
            return "You win! Scissors beats Paper!"
        }else if(computerSelection=="scissors"){
            return "Its a tie! Scissors doesn't beat Scissors!"
        } 
    }
}

function getPlayerChoice(){

    let playerChoice;
    do{
        let response = window.prompt("Choose Rock, Paper or Scissors");
        console.log(response);
        playerChoice=response.toLowerCase();
        //playerChoice = playerChoice.trimStart();
        //playerChoice = playerChoice.trimEnd();

        if(playerChoice!="rock" && playerChoice!="paper" && playerChoice!="scissors"){
            console.log("Invalid input");
        }
    }while( (playerChoice!="rock") && (playerChoice!="paper") && (playerChoice!="scissors") );

    return playerChoice;
}

function playGame(){

    
}

const rockBtn = document.querySelector('.Rock-Btn');
const paperBtn = document.querySelector('.Paper-Btn');
const scissorsBtn = document.querySelector('.Scissors-Btn');
rockBtn.addEventListener('click', playRound("rock", getComputerChoice()));
paperBtn.addEventListener('click', playRound("paper", getComputerChoice()));
scissorsBtn.addEventListener('click', playRound("scissors", getComputerChoice()));
while(1){
    if(playerScore<5){

        break;
    }else if(computerScore<5){
        
    }
}
