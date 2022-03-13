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

const cardSuits = ["♠️", "♥️", "♣️", "♦️"]
const cardValues = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

// This will shuffle the cards while retaining their values:

const cardValueSwitch = {
  "2": 2,
  "3": 3,
  "4": 4,
  "5": 5,
  "6": 6,
  "7": 7,
  "8": 8,
  "9": 9,
  "10": 10,
  "J": 11,
  "Q": 12,
  "K": 13,
  "A": 14,
}

console.log(cardSuits)
console.log(cardValues)
console.log(cardValueSwitch)

// The following code will create the deck consisting of all 52 cards and every suits variants:

class Deck {
  constructor(cards = newDeck()) {
    this.cards = cards;
  }

  get numberOfCards() {
    return this.cards.length
  }

pop() {
  return this.cards.shift()
}

push(card) {
  this.cards.push(card)
}

  shuffle() {
    for(let i = this.numberOfCards - 1; i > 0; i--) {
      const newIndex = Math.floor(Math.random() * (i + 1))
      const oldValue = this.cards [newIndex]
      this.cards[newIndex] = this.cards[i]
      this.cards[i] = oldValue
    }
  }
}

class Card {
  constructor(suit, value) {
    this.suit = suit
    this.value = value
  }
}

// The folling code block will create a new deck with all 52 cards:

function newDeck() {
  return cardSuits.flatMap(suit => { // the flatMap function will take all of the arrays and condenses them into a one array
    return cardValues.map(value => {
      return new Card(suit, value)
    })
  })
}

let playerDeck
let computerDeck
let inRound
let playerCard
let computerCard
let stop

// The following code will initiate the game:

startGame()
function startGame() {
  const deck = new Deck()
  deck.shuffle()

  const deckMidPoint = Math.ceil(deck.numberOfCards / 2)
  playerDeck = new Deck(deck.cards.slice(0, deckMidPoint))
  computerDeck = new Deck(deck.cards.slice(deckMidPoint, deck.numberOfCards))
  inRound = false
  stop = false

  console.log(playerDeck)
  console.log(computerDeck)
}

function cleanBeforeRound() {
  inRound = false

  updateDeckCount()
    if (isRoundWinner(playerCard > computerCard)) {
      return "You win!"
    } else if (isRoundWinner(computerCard > playerCard)) {
      return "You lose!"
    } else {
      console.log("Draw.")
    }

    if (isGameOver(playerDeck)) {
      console.log("Game Over!")
      stop = true
    } else if (isGameOver(computerDeck)) {
      console.log("You Won the Game!")
      stop = true
    }
}

function flipCards() {
  inRound = true

  const playerCard = playerDeck.pop()
  const computerCard = computerDeck.pop()

  playerCardSlot.appendChild(playerCard)
  computerCardSlot.appendChild(computerCard)
}

function updateDeckCount() {
  computerDeck.numberOfCards
  playerDeck.numberOfCards
}

function isRoundWinner (cardOne, cardTwo) {
  return cardValueSwitch[cardOne.value] > cardValueSwitch[cardTwo.value]
}

function isGameOver(deck) {
  return deck.numberOfCards === 0
}