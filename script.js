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

    showResult(winner, humanScore, computerScore);
}

function showResult(winner, humanScore, computerScore) {
    const winnerPar = document.querySelector('#winner');
    const humanScoreSpan = document.querySelector('#playerScore');
    const computerScoreSpan = document.querySelector('#computerScore');

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