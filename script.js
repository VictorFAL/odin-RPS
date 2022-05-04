function computerPlay() {
    const choices = ['Rock', 'Paper', 'Scissors'];

    let pick = Math.floor(Math.random() * 3);

    return choices[pick];
}


function playRound(pcSelection, playerSelection) {
    pc = pcSelection.toLowerCase();
    player = playerSelection.toLowerCase();

    if (player == pc) {
        return 'Tie';
    } 
    else if ((player == 'rock' && pc == 'scissors') ||
            (player == 'paper' && pc == 'rock') ||
            (player == 'scissors' && pc == 'paper')) {
        return 'Win';
    } else {
        return 'Lose';
    }
}


let playerScore = 0;
let pcScore = 0;

const btnRock = document.getElementById('btn-rock');
const btnPaper = document.getElementById('btn-paper');
const btnScissors = document.getElementById('btn-scissors');

btnRock.onclick = () => {
    let result = playRound(computerPlay(), 'rock');
    if (result == 'Win') {
        playerScore++;
    } else if (result == 'Lose') {
        pcScore++;
    }
}


// function game() {

//     let pcScore = 0;
//     let playerScore = 0;

//     for (let i = 1; i <= 5; i++) {

//         let pc = computerPlay();
//         let player = playerPlay();

//         result = playRound(pc, player);

//         switch (result) {
//             case 'Tie':
//                 console.log(`Tie! Both chose ${player}`);
//                 break;
//             case 'Win':
//                 console.log(`You Win! ${player} beats ${pc}`);
//                 playerScore++;
//                 break;
//             case 'Lose':
//                 console.log(`You Lose! ${pc} beats ${player}`);
//                 pcScore++;
//                 break;
//         }
//     }

//     if (playerScore > pcScore) {
//         console.log('You won the game, Congrats!');
//     } else if (playerScore < pcScore){
//         console.log('You lost the game, better luck next time!');
//     } else {
//         console.log("Tie! That's OK I guess...")
//     }
// }