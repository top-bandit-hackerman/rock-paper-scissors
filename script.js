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

let computerChoice = getComputerChoice();
let humanChoice = getHumanChoice();
console.log(humanChoice);