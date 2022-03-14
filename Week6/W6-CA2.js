/*

For the final project you will be creating an automated version of the classic card game WAR.

Think about how you would build this project and write your plan down. Consider classes such as Card, Deck, 
and Player and what fields and methods they might each have.

You can implement the game however you’d like (i.e. printing to the console, using alert, or some other way). 
The completed project should, when ran, do the following:

-	Deal 26 Cards to two Players from a Deck. 
-	Iterate through the turns where each Player plays a Card
-	The Player who played the higher card is awarded a point
    o	Ties result in zero points for either Player
-	After all cards have been played, display the score.

Write a Unit Test using Mocha and Chai for at least one of the functions you write.

*/

// ORTIGINAL CODE BELOW //

// class Deck {
//     constructor() { // create getter, and get number of cards and return this.
//       this.cardsArray = ["♠️", "♥️", "♣️", "♦️"];
//     }
//    // get.numberOfCards
// }

// class Player {
//     constructor(name) {
//       this.name = name;
//     }
// }

// Card.prototype = {
//   get number() {
//     switch(this.value) {
//       case 11:
//         return 'J';
//       case 12:
//         return 'Q';
//       case 13:
//         return 'K';
//       case 1:
//         return 'A';
//       default:
//         return this.value;
//         }
//     }
// } 

// let player1 = new Player("David")


// let player2 = new Player("")

// let myCard = new Card('hearts');

// let hisCard = new Card(suits[0])

// END ORIGINAL CODE //

// The following code will set a constant value for each of the created arrays:

class Player {
  constructor(playerName, playerDeck){
    this.playerName = playerName;
    this.playerDeck = playerDeck;
    this.points = 0;
  }
}

class Card {
  constructor(cardName, cardSuit, cardValue) {
    this.cardName = cardName;
    this.cardSuit = cardSuit;
    this.cardValue = cardValue;
  }

}

class Deck {
	constructor(){
		this.cards = [];
	}
	createDeck(){
		let cardName = ["A","2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
		let cardSuit = ["♠", "♣", "♥", "♦"];

		// We use a nested for loop to iterate through the suits and  card name in order to create new Card with the value associated by the i 

		for( let i = 0; i < cardName.length; i++){
			for(let j = 0; j < suit.length; j++){
				this.cards.push(new Card(cardName[i], cardSuit[j], i));
			}
		}
	}

// Next thing we are going to do is shuffle the deck, as the name implies:

  shuffle() {
    for (let i = this.numberOfCards - 1; i > 0; i--){
      const newIndex = Math.floor(Math.random() * (i + 1))
      const oldValue = this.cards[newIndex]
      this.cards[newIndex] = this.cards[i]
      this.cards[i] = oldValue;
    }
  }
}
    
function freshDeck() {
  return cardSuits.flatMap(cardSuit => {
    return cardValues.map(cardValue => {
      return new Card(cardSuit, cardValue)
    })
  })
}

let playerDeck
let computerDeck
let player1 = "David"
let player2 = "Computer"

startGame()
function startGame() {
  const deck = new Deck()
  deck.shuffle(player1, player2)

// This splits the deck and deals each player 26 cards:

  const deckMidpoint = Math.ceil(deck.numberOfCards / 2)
  playerDeck = new Deck(deck.cards.slice(0, deckMidpoint))
  computerDeck = new Deck(deck.cards.slice(deckMidpoint, deck.numberOfCards))
  inRound = false
  stop = false
} 
console.log(player1 + " is given 26 cards")
console.log(playerDeck)
console.log(player2 + " is given 26 cards")
console.log(computerDeck)

console.log(player1, playerCard)
console.log(player2, computerCard)

 