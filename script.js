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
    console.log(gameOver);

    showResult(winner, humanScore, computerScore, humanChoice, computerChoice);
}

function isGameOver(humanScore, computerScore, limit) {
    return Math.max(humanScore, computerScore) == limit;
}

function showResult(winner, humanScore, computerScore, humanChoice, computerChoice) {
    const winnerPar = document.querySelector('#winner');
    const humanScoreSpan = document.querySelector('#playerScore');
    const computerScoreSpan = document.querySelector('#computerScore');
    const humanChoiceSpan = document.querySelector('#playerChoice');
    const computerChoiceSpan = document.querySelector('#computerChoice');

    humanChoiceSpan.textContent = humanChoice;
    computerChoiceSpan.textContent = computerChoice;

    switch (winner) {
        case null:
            winnerPar.textContent = 'No winner, tie!';
            break;
        case 'human':
            winnerPar.textContent = 'Player wins!';
            humanScoreSpan.textContent = humanScore;
            break;
        case 'computer':
            winnerPar.textContent = 'Computer wins!';
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