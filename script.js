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

    showStatus(gameOver, winner, humanScore, computerScore, humanChoice, computerChoice);
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

function showStatus(gameOver, winner, humanScore, computerScore, humanChoice, computerChoice) {
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

    let currentRoundCount = Number(roundCountSpan.textContent);
    roundCountSpan.textContent = ++currentRoundCount;

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

// playGame();