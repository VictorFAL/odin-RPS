let playerScore = 0;
let pcScore = 0;

let spanPScore = document.getElementById('player-score');
let spanPcScore = document.getElementById('pc-score');
spanPScore.innerText = `Player: ${playerScore}`;
spanPcScore.innerText = `Computer: ${pcScore}`;

const gameBtns = document.querySelectorAll('.btn-game');

gameBtns.forEach((btn) => {
    btn.addEventListener('click', function() {
        let roundResult = playRound(computerPlay(), btn.innerText);

        if (roundResult == 'Win') {
            playerScore++;
            spanPScore.innerText = `Player: ${playerScore}`;
            checkWin();
        } else if (roundResult == 'Lose') {
            pcScore++;
            spanPcScore.innerText = `Computer: ${pcScore}`;
            checkWin();
        }
    });
});


// ========== FUNCTIONS ==========

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


function checkWin () {
    const result = document.getElementById('result');

    // show who won
    if (playerScore == 5) {
        result.innerText = 'YOU WON!';
        result.style.color = 'green';
    } else if (pcScore == 5) {
        result.innerText = 'YOU LOSE!';
        result.style.color = 'red';
    }

    // disable the game's buttons
    if (result.innerText) {
        gameBtns.forEach((btn) => {
            btn.disabled = true;
        })
    }
}