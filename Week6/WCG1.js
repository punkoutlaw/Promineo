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

// First thing we are going to do is create our "Player" class:

class Player {
  constructor(player, score) {
    this.player = player
    this.score = score
  }
  toString() {
    return this.player
  }
}

// Next, we will create our deck using a set of arrays and nesting them into a function:

function createDeck() {
  const cardSuits = ["♠", "♣", "♥", "♦"]
  const cardValues = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
  const deck = [];

  for(let suitCounter = 0; suitCounter < 4; suitCounter++) {
    for(let valueCounter = 0; valueCounter < 13; valueCounter++) {
      // console.log(cardValues[valueCounter] + cardSuits[suitCounter]);
      deck.push(cardValues[valueCounter] + cardSuits[suitCounter]);
    }
} 
return deck;
}

// Now that our deck has been create, we will create a function that will shuffle all of the cards:

function shuffleDeck(deck) {
  for(let i = 0; i < 52; i++) {
    var tempCard = deck[i];
    var randomIndex = Math.floor(Math.random() * 51);
    deck[i] = deck[randomIndex];
    deck[randomIndex] = tempCard;
  }
}

var testDeck = createDeck();
shuffleDeck(testDeck);

// alert("We are going to play war! Let me shuffle the deck for you 😉");
console.log(testDeck);


function dealCards(deck) {
  const deckMidpoint = Math.ceil(deck.numberOfCards / 2)
  playerDeck = new Deck(deck.cards.slice(0, deckMidpoint))
  computerDeck = new Deck(deck.cards.slice(deckMidpoint, deck.numberOfCards))
}
