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
    } else if ((humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')) {
        console.log(`You win: ${humanChoice} beats ${computerChoice}!`);
        humanScore++;
    } else {
        console.log(`You lose: ${computerChoice} beats ${humanChoice}!`);
        computerScore++;
    }


}

let computerScore = 0;
let humanScore = 0;

const computerChoice = getComputerChoice();
const humanChoice = getHumanChoice();

playRound(computerChoice, humanChoice);