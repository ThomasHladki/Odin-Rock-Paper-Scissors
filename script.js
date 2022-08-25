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
            return "You win! Rock beats Paper!";
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

        }else if(computerSelection=="scissors"){
            
        } 
    }
}