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
            return "You lose! Paper beats Rock!";
        }else if(computerSelection=="scissors"){
            return "You win! Rock beats Scissors!";
        }
    }else if(playerSelection=="paper"){
        if(computerSelection=="rock"){
            return "You win! Paper beats Rock!";
        }else if(computerSelection=="paper"){
            return "Its a tie! Paper doesn't beat Paper!"
        }else if(computerSelection=="scissors"){
            return "You lose! Scissors beats Paper!"
        }
    }else if(playerSelection=="scissors"){
        if(computerSelection=="rock"){
            return "You lose! Rock beats Scissors!"
        }else if(computerSelection=="paper"){
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

    for(let i =0; i<5; i++){

        let result = playRound(getPlayerChoice(),getComputerChoice());
        alert(result);
    }
}

playGame();