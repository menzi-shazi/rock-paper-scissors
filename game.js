function computerPlay(){
    const play = ['ROCK','PAPER','SCISSORS'];
    return play[Math.floor(Math.random() * play.length)];
}

function singleRound(playerSelection,compSelection){
    if (playerSelection === 'ROCK' && compSelection === 'ROCK'){
        return 'Its a tie! You both played ROCK';
    }
    if (playerSelection === 'ROCK' && compSelection === 'PAPER'){
        return 'You lost! PAPER beats ROCK';
    }
    if (playerSelection === 'ROCK' && compSelection === 'SCISSORS'){
        return 'You won! ROCK beats SCISSORS';
    }
    if (playerSelection === 'PAPER' && compSelection === 'PAPER'){
        return 'Its a tie! You both played PAPER';
    }
    if (playerSelection === 'PAPER' && compSelection === 'ROCK'){
        return 'You won! PAPER beats ROCK';
    }
    if (playerSelection === 'PAPER' && compSelection === 'SCISSORS'){
        return 'You lost! SCISSORS beats PAPER';
    }
    if (playerSelection === 'SCISSORS' && compSelection === 'SCISSORS'){
        return 'Its a tie! You both played SCISSORS';
    }
    if (playerSelection === 'SCISSORS' && compSelection === 'ROCK'){
        return 'You lost! ROCK beats SCISSORS';
    }
    if (playerSelection === 'SCISSORS' && compSelection === 'PAPER'){
        return 'You won! SCISSORS beats PAPER';
    }
}

function game(){
    for (let i = 0;i < 5;++i){
        let input = prompt("Play :").toUpperCase();
        console.log(singleRound(input,computerPlay()));
    }
}