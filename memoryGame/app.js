const cardArray = [
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name: 'fries',
        img: 'images/fries.png'
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'images/pizza.png'
    }
]


let chosenCard = [];
let chosenCardsId = [];
let wonCard = [];
cardArray.sort(()=>0.5 - Math.random());
const gridDisplay = document.querySelector('#grid');
const result = document.getElementById('result');



function createBoard(){
    for(let i = 0; i < cardArray.length; i++){
        const card = document.createElement('img');
        card.setAttribute('src', 'images/blank.png');
        card.setAttribute('data-id', i);
        card.addEventListener('click', flipCard);
        gridDisplay.appendChild(card);
    }
}

function checkMatch() {
    const cards = document.querySelectorAll('img');
    if (chosenCardsId[0] == chosenCardsId[1]) {
        cards[chosenCardsId[0]].setAttribute('src', 'imagse/blank.png');
        cards[chosenCardsId[1]].setAttribute('src', 'imagse/blank.png');
        alert("Oh you click on the same picture");
    } 
    if(chosenCard[0] == chosenCard[1] && chosenCardsId[0] != chosenCardsId[1]) {
        cards[chosenCardsId[0]].setAttribute('src', 'images/white.png');
        cards[chosenCardsId[1]].setAttribute('src', 'images/white.png');
        cards[chosenCardsId[0]].removeEventListener('click', flipCard);    
        cards[chosenCardsId[1]].removeEventListener('click', flipCard); 
        alert("Match!");
        wonCard.push(chosenCard);   
    } else {
        cards[chosenCardsId[0]].setAttribute('src', 'images/blank.png');
        cards[chosenCardsId[1]].setAttribute('src', 'images/blank.png');
        alert('Sorry, try again')

    }
    result.textContent = wonCard.length;
    chosenCard = [];
    chosenCardsId = [];
   if(wonCard.length === cardArray.length/2) {
        result.textContent = 'Congrats, you match them all';
   }

}



createBoard();
function flipCard() {
    const cardId = this.getAttribute('data-id');
    console.log(cardArray[cardId].name);
    chosenCard.push(cardArray[cardId].name);
    chosenCardsId.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);
    if(chosenCard.length === 2) {
        setTimeout(checkMatch, 500);
    }
}