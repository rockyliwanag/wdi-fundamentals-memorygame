const cards = ['queen', 'queen', 'king', 'king'];
let cardsInPlay = [];

//function to store the steps to check for a match
function checkForMatch(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
	  console.log("You found a match!");
	} else {
	  console.log("Sorry, try again.");
	}

};
//function for user to flip cards
function flipCard(cardId) {
	if (cardsInPlay.length === 2) {
	  checkForMatch();   
	}
	cardsInPlay.push(cards[cardId]);
	console.log("User flipped " + cards[cardId]);	
}
flipCard(0);
flipCard(2);
checkForMatch();




