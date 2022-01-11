let compScore = 0;
let playerScore = 0;

function computerPlay(){
    const play = ['ROCK','PAPER','SCISSORS'];
    return play[Math.floor(Math.random() * play.length)];
}

function singleRound(playerSelection,compSelection){
    if (playerSelection === 'ROCK' && compSelection === 'ROCK'){
        return 'Its a tie! You both played ROCK';
    }
    if (playerSelection === 'ROCK' && compSelection === 'PAPER'){
        compScore++;
        return 'You lost! PAPER beats ROCK';
    }
    if (playerSelection === 'ROCK' && compSelection === 'SCISSORS'){
        playerScore++;
        return 'You won! ROCK beats SCISSORS';
    }
    if (playerSelection === 'PAPER' && compSelection === 'PAPER'){
        return 'Its a tie! You both played PAPER';
    }
    if (playerSelection === 'PAPER' && compSelection === 'ROCK'){
        playerScore++;
        return 'You won! PAPER beats ROCK';
    }
    if (playerSelection === 'PAPER' && compSelection === 'SCISSORS'){
        compScore++;
        return 'You lost! SCISSORS beats PAPER';
    }
    if (playerSelection === 'SCISSORS' && compSelection === 'SCISSORS'){
        return 'Its a tie! You both played SCISSORS';
    }
    if (playerSelection === 'SCISSORS' && compSelection === 'ROCK'){
        compScore++;
        return 'You lost! ROCK beats SCISSORS';
    }
    if (playerSelection === 'SCISSORS' && compSelection === 'PAPER'){
        playerScore++;
        return 'You won! SCISSORS beats PAPER';
    }
}

let result = document.createElement("div");
let score = document.createElement("div");

let rock = document.querySelector(".rock");
rock.addEventListener("click", () => {
    result.textContent=singleRound(rock.getAttribute("class").toUpperCase(),computerPlay());
    score.textContent = `player: ${playerScore}, computer: ${compScore}`;
    
});

let paper = document.querySelector(".paper");
paper.addEventListener("click", () => {
    result.textContent=singleRound(paper.getAttribute("class").toUpperCase(),computerPlay());
    score.textContent = `player: ${playerScore}, computer: ${compScore}`;

});

let scissors = document.querySelector(".scissors");
scissors.addEventListener("click", () => {
    result.textContent=singleRound(scissors.getAttribute("class").toUpperCase(),computerPlay());
    score.textContent = `player: ${playerScore}, computer: ${compScore}`;

});

let body = document.querySelector("body");
body.appendChild(result);
body.appendChild(score);



