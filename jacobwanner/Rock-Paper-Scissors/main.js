
const amountOfRounds = prompt("How many rounds for this game?");
let userSelection = getNewUserChoice();
let computerSelection = getNewComputerChoice();
const computerWinner = "The computer wins this round.";
const userWinner = "You win this round.";
const tieRound = "Tie game. It's a draw!";
let userScore = 0;
let computerScore = 0;
// you probably dont have to do this but I was checking to see if the variable declarations were not getting messed up 
let a = userSelection;
let b = computerSelection;

function getNewComputerChoice() {
    let answer = Math.floor(Math.random()*3 +1);  
    if (answer === 1) {
        return "rock"
    } else if (answer === 2) {
        return "paper"
    } else if (answer === 3) {
        return "scissors"
    }
}

function getNewUserChoice() {
    return prompt("Write rock paper or scissors:").toLowerCase();
}

function playRound(a, b) {
    if (userSelection === computerSelection) {
        console.log(tieRound)
    } else if (userSelection === "rock" && computerSelection === "paper" ) {
        console.log(computerWinner)
        computerScore++;
    } else if (userSelection === "rock" && computerSelection === "scissors" ) {
        console.log(userWinner)
        userScore++;
    } else if (userSelection === "paper" && computerSelection === "rock" ) {
        console.log(userWinner)
        userScore++
    } else if (userSelection === "paper" && computerSelection === "scissors" ) {
        console.log(computerWinner)
        computerScore++;
    } else if (userSelection === "scissors" && computerSelection === "rock" ) {
        console.log(computerWinner)
        computerScore++;
    } else if (userSelection === "scissors" && computerSelection === "paper" ) {
        console.log(userWinner)
        userScore++
    } else {
        console.log("Mission Failed. We'll get e'm next time.")
    }
}

// let endOfGameTie =  "Game over!" + tieRound + "!" + " Final Score: " + userScore + "-" + computerScore;
// let endOfGameWinner = "Game over! You Win!"+ " Final Score: " + userScore + "-"+ computerScore;
// let endOfGameLoser = "Game over! You Lose!"+ " Final Score: " + userScore + "-"+ computerScore;
// does starting the loop at 1 help fix your problem?
function game() {
    for (let i=1; i<amountOfRounds; i++){
        getNewUserChoice();
        getNewComputerChoice();
        console.log("Your choice: " + a);
        console.log("The computer chose " + b);
        playRound(a, b); 
        console.log("Your score: " + userScore + " Computer score: " + computerScore);
    }
    // if (userScore === computerScore){
    //     return endOfGameTie;
    // } else if (userScore > computerScore){
    //     return endOfGameWinner;
    // } else if (userScore < computerScore){
    //     return endOfGameLoser;
    // } else {
    //     return "didnt quite work";
    // }
}

game()
