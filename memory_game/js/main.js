const cards = [
	{
		rank: 'queen',
		suit: 'hearts',
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: 'queen',
		suit: 'diamonds',
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: 'king',
		suit: 'hearts',
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: 'king',
		suit: 'diamonds',
		cardImage: "images/king-of-diamonds.png"
	}
];
const cardsInPlay = [];
//function for user to flip cards
const flipCard = function() {
	var cardId = this.getAttribute('data-id'); //0
	this.setAttribute('src', cards[cardId].cardImage);
	cardsInPlay.push(cards[cardId].rank);

	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
};
//function to store the steps to check for a match
// const checkForMatch = function() {
// 	if (cardsInPlay[0] === cardsInPlay[1]) {
// 		alert("You found a match!");
// 	} else {
// 		alert("Sorry, try again");
// 	}
// }
//function to store the steps to check for a match
function checkForMatch() { 
		if (cardsInPlay[0] === cardsInPlay[1]) {
	  alert("You found a match!");
	} else {
		alert("Sorry, try again");
		}
}
//create board function
const createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
};


createBoard();