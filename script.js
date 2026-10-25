function getComputerChoice() {
    const computerChoices = [
        'rock',
        'paper',
        'scissors'
    ];

    let choiseIndex = Math.floor(Math.random() * 3);

    return computerChoices[choiseIndex];
}

function getHumanChoice() {
    return prompt('Choose rock, paper or scissors: ');
}

function playRound(computerChoice, humanChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log('It is a tie!');
        return null;
    } else if ((humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')) {
        console.log(`You win: ${humanChoice} beats ${computerChoice}!`);
        return 'human';
    } else {
        console.log(`You lose: ${computerChoice} beats ${humanChoice}!`);
        return 'computer';
    }
}

function playGame() {
    let computerScore = 0;
    let humanScore = 0;

    for (let roundCount = 0; roundCount < 5; roundCount++) {
        const computerChoice = getComputerChoice();
        const humanChoice = getHumanChoice();
        const roundWinner = playRound(computerChoice, humanChoice);

        if (roundWinner !== null) {
            if (roundWinner === 'human') humanScore++;
            else computerScore++;
        }

        console.log(`Player score: ${humanScore}. Computer score: ${computerScore}`);
    }

    if (humanScore === computerScore) {
        console.log(`Tie! Your score: ${humanScore}. Computer score: ${computerScore}`);
    }
    else if (humanScore > computerScore) {
        console.log(`You win! Your score: ${humanScore}. Computer score: ${computerScore}`);
    } else {
        console.log(`You lose! Your score: ${humanScore}. Computer score: ${computerScore}`);
    }
}

playGame();