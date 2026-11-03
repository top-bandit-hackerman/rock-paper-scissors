function getComputerChoice() {
    const computerChoices = [
        'rock',
        'paper',
        'scissors'
    ];

    let choiseIndex = Math.floor(Math.random() * 3);

    return computerChoices[choiseIndex];
}

function playRound(event) {
    const playerChoice = event.target.id.toLowerCase();
    const computerChoice = getComputerChoice();

    let playerScore = Number(document.querySelector('#playerScore').textContent);
    let computerScore = Number(document.querySelector('#computerScore').textContent);

    let roundCount = Number(document.querySelector('#roundCount').textContent);
    roundCount++;

    const winner = determineWinner(playerChoice, computerChoice);

    switch (winner) {
        case 'computer':
            computerScore++;
            break;
        case 'player':
            playerScore++;
            break;
    }

    const gameOver = isGameOver(playerScore, computerScore, 5);
    if (gameOver) {
        disableGameControls();
    }

    showStatus(gameOver, winner, playerScore, computerScore, playerChoice, computerChoice, roundCount);
    showLog(roundCount, playerChoice, computerChoice, winner, playerScore, computerScore);
}

function isGameOver(playerScore, computerScore, limit) {
    return Math.max(playerScore, computerScore) == limit;
}

function disableGameControls() {
    const playerChoiceBtns = document.querySelectorAll('button');
    playerChoiceBtns.forEach((btn) => {
        btn.disabled = true;
    })
}

function showStatus(gameOver, winner, playerScore, computerScore, playerChoice, computerChoice, roundCount) {
    const playerChoiceSpan = document.querySelector('#playerChoice');
    const computerChoiceSpan = document.querySelector('#computerChoice');
    const winnerPar = document.querySelector('#winner');
    const roundCountSpan = document.querySelector('#roundCount');
    const scoreTypeSpan = document.querySelector('#scoreType');
    const playerScoreSpan = document.querySelector('#playerScore');
    const computerScoreSpan = document.querySelector('#computerScore');

    const scoreType = gameOver ? 'Final' : 'Current';
    scoreTypeSpan.textContent = scoreType;

    const mode = gameOver ? 'game' : 'round';

    playerChoiceSpan.textContent = playerChoice;
    computerChoiceSpan.textContent = computerChoice;

    roundCountSpan.textContent = roundCount;

    switch (winner) {
        case null:
            winnerPar.textContent = 'No winner, tie!';
            break;
        case 'player':
            winnerPar.textContent = `Player wins this ${mode}!`;
            playerScoreSpan.textContent = playerScore;
            break;
        case 'computer':
            winnerPar.textContent = `Computer wins this ${mode}!`;
            computerScoreSpan.textContent = computerScore;
            break;
    }
}

function showLog(roundCount, playerChoice, computerChoice, winner, playerScore, computerScore) {
    const logUl = document.querySelector('#log');
    const li = document.createElement('li');
    li.textContent = `${roundCount}. Player: ${playerChoice}. Computer: ${computerChoice}  => `;
    li.textContent += winner === null ? 'tie. ' : `${winner} wins `;
    li.textContent += `(P:${playerScore} / C:${computerScore})`
    logUl.appendChild(li);
}

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return null;
    } else if ((playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')) {
        return 'player';
    } else {
        return 'computer';
    }
}

const playerChoiceBtns = document.querySelectorAll('button');
playerChoiceBtns.forEach((btn) => btn.addEventListener('click', (e) => {
    playRound(e);
}))