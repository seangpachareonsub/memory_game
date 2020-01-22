var cards = [
    {
        rank: 'queen',
        suit: 'hearts',
        cardImage: 'images/queen-of-hearts.png'
    },
    {
        rank: 'queen',
        suit: 'diamonds',
        cardImage: 'images/queen-of-diamonds.png'
    },
    {
        rank: 'king',
        suit: 'hearts',
        cardImage: 'images/king-of-diamonds.png'
    },
    {
        rank: 'king',
        suit: 'diamonds',
        cardImage: 'images/king-of-diamonds.png'
    }
];

var cardsInPlay = [];
var clickedImage;

function checkForMatch(e) {
    var cardNumber = clickedImage.getAttribute('data-id');
    clickedImage.setAttribute('src', cards[cardNumber].cardImage);
    if(cardsInPlay.length === 2) {
        if(cardsInPlay[0] === cardsInPlay[1]) {
          alert('You found a match');
          location.reload();
      } else {
          alert('Sorry, try again');
          location.reload();
      }
  }
}

function flipCard(e) {
    var cardId = e.target.getAttribute('data-id');
    clickedImage = e.target
    console.log('User flipped ' + cards[cardId].rank);
    console.log(cards[cardId].cardImage)
    console.log(cards[cardId].suit)

    cardsInPlay.push(cards[cardId].rank)

    checkForMatch();
}

//creating 4 images of back of card inside of the div element in the index.html
function createBoard() {
    for (let i = 0; i < cards.length; i++) {
        var cardElement = document.createElement('img');
        cardElement.setAttribute('src','images/back.png');
        cardElement.setAttribute('data-id', i);
        cardElement.addEventListener('click', flipCard);
        document.getElementById('game-board').appendChild(cardElement);

    }
}

createBoard();
