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
    const humanChoice = event.target.id.toLowerCase();
    const computerChoice = getComputerChoice();

    let humanScore = Number(document.querySelector('#playerScore').textContent);
    let computerScore = Number(document.querySelector('#computerScore').textContent);

    let roundCount = Number(document.querySelector('#roundCount').textContent);
    roundCount++;

    const winner = determineWinner(humanChoice, computerChoice);

    switch (winner) {
        case 'computer':
            computerScore++;
            break;
        case 'human':
            humanScore++;
            break;
    }

    const gameOver = isGameOver(humanScore, computerScore, 5);
    if (gameOver) {
        disableGameControls();
    }

    showStatus(gameOver, winner, humanScore, computerScore, humanChoice, computerChoice, roundCount);
    updateLog(roundCount, humanChoice, computerChoice, winner, humanScore, computerScore);
}

function isGameOver(humanScore, computerScore, limit) {
    return Math.max(humanScore, computerScore) == limit;
}

function disableGameControls() {
    const playerChoiceBtns = document.querySelectorAll('button');
    playerChoiceBtns.forEach((btn) => {
        btn.disabled = true;
    })
}

function showStatus(gameOver, winner, humanScore, computerScore, humanChoice, computerChoice, roundCount) {
    const humanChoiceSpan = document.querySelector('#playerChoice');
    const computerChoiceSpan = document.querySelector('#computerChoice');
    const winnerPar = document.querySelector('#winner');
    const roundCountSpan = document.querySelector('#roundCount');
    const scoreTypeSpan = document.querySelector('#scoreType');
    const humanScoreSpan = document.querySelector('#playerScore');
    const computerScoreSpan = document.querySelector('#computerScore');

    const scoreType = gameOver ? 'Final' : 'Current';
    scoreTypeSpan.textContent = scoreType;

    const mode = gameOver ? 'game' : 'round';

    humanChoiceSpan.textContent = humanChoice;
    computerChoiceSpan.textContent = computerChoice;

    roundCountSpan.textContent = roundCount;

    switch (winner) {
        case null:
            winnerPar.textContent = 'No winner, tie!';
            break;
        case 'human':
            winnerPar.textContent = `Player wins this ${mode}!`;
            humanScoreSpan.textContent = humanScore;
            break;
        case 'computer':
            winnerPar.textContent = `Computer wins this ${mode}!`;
            computerScoreSpan.textContent = computerScore;
            break;
    }
}

function updateLog(roundCount, humanChoice, computerChoice, winner, humanScore, computerScore) {
    const logUl = document.querySelector('#log');
    const li = document.createElement('li');
    li.textContent = `${roundCount}. Player: ${humanChoice}. Computer: ${computerChoice}  => `;
    li.textContent += winner === null ? 'tie. ' : `${winner} wins `;
    li.textContent += `(P:${humanScore} / C:${computerScore})`
    logUl.appendChild(li);
}

function determineWinner(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return null;
    } else if ((humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')) {
        return 'human';
    } else {
        return 'computer';
    }
}

const playerChoiceBtns = document.querySelectorAll('button');
playerChoiceBtns.forEach((btn) => btn.addEventListener('click', (e) => {
    playRound(e);
}))