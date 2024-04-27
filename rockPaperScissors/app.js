const computerChoiceDisplay = document.getElementById('computer-choice');
const yourChoiceDisplay = document.getElementById('your-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let userChoice;
let computerChoice;

function getRandom() {
    let randomNum = Math.floor(Math.random()*3);
    switch (randomNum) {
        case 0 : 
        computerChoice = 'rock';
        break;
        case 1 :
            computerChoice = 'paper';
            break;
            case 2 :
                computerChoice = 'scissors';
                break;
        
    }
   
}

function winner() {
    if (computerChoice == 'paper' && userChoice == 'rock'||computerChoice == 'rock' && userChoice == 'scissors' || computerChoice == 'scissors' && userChoice == 'paper') {
        resultDisplay.innerHTML = 'computer win!';
    } else if (userChoice == 'paper' && computerChoice == 'rock'||userChoice == 'rock' && computerChoice == 'scissors' || userChoice == 'scissors' && computerChoice == 'paper') {
        resultDisplay.innerHTML = 'you win!';
    } else {
        resultDisplay.innerHTML = 'draw';
    }
}

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e)=>{
    userChoice = e.target.id;
    yourChoiceDisplay.innerHTML = userChoice;
   getRandom();
    computerChoiceDisplay.innerHTML = computerChoice;
    winner();
}))

