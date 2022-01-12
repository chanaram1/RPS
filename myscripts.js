const myArray = ["Rock", "Paper", "Scissors"];

function computerPlay(){ //could sub ~~ instead of math.floor
    computerSelection = myArray[Math.floor(Math.random()*myArray.length)].toLowerCase(); //picks a random number from the array
}

function playerPlay(){
    playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
}

function singleRound(){
    if (computerSelection == playerSelection) {
        print("Tie game!");
    }
}