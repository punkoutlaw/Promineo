const SUITS = ['S', 'H', 'C', 'D'];
const VALUES = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13'];

class Card {
	// cards have a face suit and a value (see the constants SUIT and VALUES at the top of the .js
	constructor(suit, value){
		this.suit = suit;
		this.value = value;
	}
	toString() {
		// Even though we are storing the value in the object as simple letters and digits, when we print, we want it to look nice.
		// for Values, it is much easier to compare numbers and later print it as Ace/Jack/Queen/King, so that's what we do
		let suitString;
		let valueString;
			switch (this.suit) {
				case 'S':
					suitString = '♠️';
					break;
				case 'D':
					suitString = '♦️';
					break;
				case 'C':
					suitString = '♣️';
					break;
				case 'H':
					suitString = '♥️';
					break;
			}
			switch (this.value) {
				case '1':
					valueString = 'Ace';
					break;
				case '13':
					valueString = 'King';
					break;
				case '12':
					valueString = 'Queen';
					break;
				case '11':
					valueString = 'Jack';
					break;
				default:
					valueString = this.value;
			}
		return `${valueString} of ${suitString}`;
		}
	// compare one card to another card - return true of the value is ==
	equals(anotherCard){
		return parseInt(this.value) == parseInt(anotherCard.value);
	}		
	// compare one card to another - return true if this card is greater than the other
	greaterThan(anotherCard){
		return parseInt(this.value) > parseInt(anotherCard.value);
	}
	// compare one card to another - return true if this card is less than the other
	lessThan(anotherCard){
		return parseInt(this.value) < parseInt(anotherCard.value);
	}
}


class Deck {
	constructor() {
		this.cards = [];
	}
	toString() {
		return '' + this.cards;
		
	}
	// creates the deck, or we can say "reset" because we might have a desk already but want to put them in order.  This will do both things.
	resetDeck() {
		this.cards = [];
		// for loops through the 4 suits and then the 13 values, creating a "card" to push onto our deck
		for (let i=0; i<SUITS.length; i++){
			for (let x=0; x<VALUES.length; x++){
				let card = new Card(SUITS[i], VALUES[x]);
				this.cards.push(card);
			}
		}
	}
	shuffleDeck() {
	// given a deck of cards, return a new deck of cards in a different order	
	// using some Math functions to randomly generate numbers less than the size of our deck and reverse it with another
	// card in the deck until we have iterated through the entire deck
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
	//
    for (let i = this.cards.length - 1; i > 0; i--) {
        let x = Math.floor(Math.random() * (i + 1));
        [this.cards[i], this.cards[x]] = [this.cards[x], this.cards[i]];
		}
	}
	dealCards() {
		let player1Deck = new Deck();
		let player2Deck = new Deck();
		// war involves 2 players who each get 26 cards
		// we are going to get a deck of cards and return 2 (1 for each player)
		for (let i = this.cards.length - 1; i > 0; i--) {
			player1Deck.push(this.cards[i]);
			i--;
				if (i >= 0) {
					player2Deck.push(this.cards[i]);
			}	
		} 
		this.cards = [];
		return [player1Deck, player2Deck];
	}
	// The following functions are to replace functions I would have run if my deck of cards was a simple array of [suit][value] strings instead of an array of objects.
	// Puts the card on the "bottom" of the deck (beginning of the stack)
	push(card) {
		this.cards.push(card);
		
	}
	putCardBottom(card) {
		this.cards.unshift(card);
		
	}
	// Pop the card off the top of the deck (the end of the stack)
	takeTopCard() {
		return this.cards.pop();
	}
	// Look at the value of the card you want to play
	pullTopCard() {
		return this.cards[this.cards.length-1];
		
	}
	// how many cards are in the hand (how many objects in the deck)
	length() {
		return this.cards.length;
	}
}

function playWar(player1Deck, player2Deck) {
	// we are taking in 2 decks of cards - a deck is an object (class deck) containing an array of objects (class cards)
		
	// every round, we compare the cards from the "top" of the deck (I consider this to be the last item in the list)
	// and put the won cards at the bottom of the deck (the start of the list)
	// my reasoning is because your deck is upside down and it makes sense from an array standpoint that "pop" would
	// give you the last item in the array.
	
	// if P1 is the higher card, p1score gets a point; if p2 has the higher card, p2score gets the point.
	// if the cards are equal, no one gets a point, and we discard both cards. before I started discarding cards,
	// the game would actually run indefinitely, as those are not the rules of the game of war on the
	// bicycle site - those instructions involve a greater number of discard cards to move the game along.
	// we do this until one of the players has no more cards
	
	// as long as player1Deck or player2Deck has cards, we'll keep comparing cards
	
	let p1card;
	let p2card;

	let p1score = 0;
	let p2score = 0;
		
	// keeping track of iterations because the game was going crazy during tests
	// it was interesting 
	let i = 0;
	
	do {
		p1card = player1Deck.pullTopCard();
		p2card = player2Deck.pullTopCard();
		console.log('ROUND' + i + ':');
		console.log('PLAYER 1 CARD: ' + p1card.toString() + ', PLAYER 2 CARD: ' + p2card.toString());
		console.log('*******************************');
		if (p1card.greaterThan(p2card)) {	
			// player1's card is bigger, put it and player1's card at the bottom of the deck
				console.log('PLAYER 1 WINS ROUND!');
				p1score++;
				player1Deck.putCardBottom(player1Deck.takeTopCard());
				player1Deck.putCardBottom(player2Deck.takeTopCard());
		} else if (p2card.greaterThan(p1card)) {
				console.log('PLAYER 2 WINS ROUND!');
				p2score++;
				player2Deck.putCardBottom(player2Deck.takeTopCard());
				player2Deck.putCardBottom(player1Deck.takeTopCard());
		} else {
			console.log('-----TIE ROUND----');
			// lets discard the cards
			player2Deck.takeTopCard();
			player1Deck.takeTopCard();
		}
	i++;
}  while ((player1Deck.length()!=0) && (player2Deck.length()!=0));
	
	console.log('Final scores!! Player1 points: ' + p1score + ', Player2 points: ' + p2score);
	
	if (p1score > p2score) {
		return `Player 1 is the winner of the game!!!!!!!!!!!`;
	}	else if (p2score > p1score) { 
		return `Player 2 is the winner of the game!!!!!!!!!!!`; 
	} else return `Somehow there was a tie......?`;
	

}

var deck = new Deck();
var player1Deck;
var player2Deck;

// Create a new deck of cards - the cards will be in order
deck.resetDeck();
console.log('Deck initialized, contents: ' + deck.toString());
// Shuffle same deck
deck.shuffleDeck();
console.log('Shuffled deck, contents: ' + deck.toString());
// Deal the cards from the shuffled deck to 2 players.  You will notice that the cards shuffle
// from the bottom of the deck (last time in the stack), so if you look at the hands, the first cards are the last cards from the shuffled  deck
[player1Deck, player2Deck] = deck.dealCards();
console.log('Player 1 has ' + player1Deck.length() + ' cards, here is their hand: ' + player1Deck.toString());
console.log('player 2 has ' + player2Deck.length() + ' cards, here is their hand: ' + player2Deck.toString());
// Player the game with the 2 decks.
console.log(playWar(player1Deck, player2Deck));