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
let cardsInPlay = [];

//function to store the steps to check for a match
function checkForMatch(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
	  alert("You found a match!");
	  console.log("You found a match!");
	} else {
		alert("Sorry, try again");
	  console.log("Sorry, try again.");
	}

};
//function for user to flip cards
function flipCard(cardId) {
	if (cardsInPlay.length === 2) {
	  checkForMatch();   
	}
	cardsInPlay.push(cards[cardId].rank);
	console.log("User flipped " + cards[cardId].rank, cards[cardId].cardImage);	
}
flipCard(0);
flipCard(2);
checkForMatch();




