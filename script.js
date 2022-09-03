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
            alert("It's a tie! Rock doesn't beat Rock!");
             
        }else if(computerSelection=="paper"){
            computerScore++;
            updateScoreboard();
            alert("You lose! Paper beats Rock!");
            
        }else if(computerSelection=="scissors"){
            playerScore++;
            updateScoreboard();
            alert("You win! Rock beats Scissors!");

        }
    }else if(playerSelection=="paper"){
        if(computerSelection=="rock"){
            playerScore++;
            updateScoreboard();
            alert("You win! Paper beats Rock!");
            
        }else if(computerSelection=="paper"){
            alert("Its a tie! Paper doesn't beat Paper!");
        }else if(computerSelection=="scissors"){
            computerScore++;
            updateScoreboard();
            alert("You lose! Scissors beats Paper!");
            
        }
    }else if(playerSelection=="scissors"){
        if(computerSelection=="rock"){
            computerScore++;
            updateScoreboard();
            alert("You lose! Rock beats Scissors!");
           
        }else if(computerSelection=="paper"){
            playerScore++;
            updateScoreboard();
            alert("You win! Scissors beats Paper!");
            
        }else if(computerSelection=="scissors"){
            alert("Its a tie! Scissors doesn't beat Scissors!");
            
        } 
    }
    checkWinner();
}

function updateScoreboard(){
    const playerScoreElement = document.querySelector('.Player-Score-Value');
    const computerScoreElement = document.querySelector('.Computer-Score-Value');
    const newPlayerScore = document.createElement('span');
    newPlayerScore.textContent=playerScore;
    const newComputerScore = document.createElement('span');
    newComputerScore.textContent=computerScore;
    newPlayerScore.setAttribute("class", "Player-Score-Value");
    newComputerScore.setAttribute("class", "Computer-Score-Value");
    playerScoreElement.parentNode.replaceChild(newPlayerScore, playerScoreElement);
    computerScoreElement.parentNode.replaceChild(newComputerScore, computerScoreElement);   
}

function checkWinner(){
    if(playerScore==5){
        winGame("player");
    }else if(computerScore==5){
        winGame("computer");
    }
}

function playAgain(){
    const playAgainDiv = document.querySelector('.Play-Again-Container');
    const playAgainBtn = document.createElement('button');
    playAgainBtn.textContent="Click here to play again";
    playAgainBtn.addEventListener("click", function(){
        window.location.reload();});
    playAgainDiv.appendChild(playAgainBtn);
}

function winGame(winner){
    if(winner=="player"){
        alert("You won! The final score is "+playerScore+ " to "+ computerScore+"!");
        playAgain();
        //window.location.reload();
    }else if(winner=="computer"){
        alert("You lost! The final score is "+playerScore+ " to "+ computerScore+"!");
        playAgain();
        //window.location.reload();
    }
}


const rockBtn = document.querySelector('.Rock-Btn');
const paperBtn = document.querySelector('.Paper-Btn');
const scissorsBtn = document.querySelector('.Scissors-Btn');
rockBtn.addEventListener('click', function(){playRound("rock", getComputerChoice())});
paperBtn.addEventListener('click', function(){playRound("paper", getComputerChoice())});
scissorsBtn.addEventListener('click', function(){playRound("scissors", getComputerChoice())});


