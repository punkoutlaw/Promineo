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
 
//\\ GAME PLAN //\\

// Make a deck of all cards
// Make 2 players
// Deal 26 cards
// Iterate through the turns (loop)
// Play (deal) cards
// if play1 value > than play2 value = p1.score++ (else if statement)
// if play2 value > than play1 value = p2.score++
// Else = nobody gets points
// print score


alert("Let's play war!");

// First thing we will do is create our player class:

class Player {
    hand = []; // using an empty array because the players hand is intially empty.
    playerName // this is optional but is good to keep track of all our properties in the class
    score = 0 // score starts at zero, so this is self explanatory :)
    constructor(playerName) {
      this.playerName = playerName
    }

    setHand(hand) {
      this.hand = hand;
    }

    playTopCard() {
      return this.hand.shift()
    }

    updateScore() {

    }

    displayScore() {

    }

    toString() {
      return this.playerName
    }
  }

class Card {
    constructor(name, value, suit) {
        this.name = name;
        this.suit = suit;
        this.value = value;
    }
    toString() {
      return this.name
    }
}

// Here we will create our players:

let player1 = new Player('David');
let player2 = new Player('Computer');
console.log(player1, player2)

// This next function will shuffle our deck:

function shuffleDeck(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffleDeck...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
  
}

// Here we are creating our deck:

class Deck {
  deck = [];
  suits = ["♠", "♣", "♥", "♦"];
  cards = {
      "2": 2,
      "3": 3,
      "4": 4,
      "5": 5,
      "6": 6,
      "7": 7,
      "8": 8,
      "9": 9,
      "10":10,
      "J": 11,
      "Q": 12,
      "K": 13,
      "A": 14
  }

  constructor() {
    this.createDeck();
  }

  createDeck() {
      this.suits.forEach(suit => { // When using a method, you need to put "this.method" to call it from our class
        for(let c in this.cards) {
            this.deck.push(new Card(c,this.cards[c],suit)) // to call the value of the object, use cards[c]!
        }
      })
      this.deck = shuffleDeck(this.deck)
  }

  splitDeck() {
    var half_length = Math.ceil(this.deck.length / 2);
    var leftSide = this.deck.splice(0, half_length);
    return [leftSide, this.deck];
  }
  
}

// Now that our class is made and has all it's methods in place, we can create out new deck:

let freshDeck = new Deck();
// console.log(freshDeck)

// This will deal the cards evenly to the two players:

console.log(`${player1} & ${player2} are each given 26 cards.`)
alert(`${player1} & ${player2} are each given 26 cards.`)

let [left, right] = freshDeck.splitDeck();
left.forEach(hand => {
  console.log(`${player1}'s cards`)
  console.log(hand)
})
right.forEach(hand => {
  console.log(`${player2}'s cards`)
  console.log(hand)
})
player1.setHand(left)
player2.setHand(right)

// console.log(player1.hand, player2.hand);

// Now we will compare player1 & player2 hands

while(player1.hand.length > 0) {
    let player1Card = player1.playTopCard()
    let player2Card = player2.playTopCard()
    if(player1Card.value > player2Card.value) {
        player1.score++
        console.log(`${player1} won!`)
        alert(`${player1} won!`)
    } else if (player1Card.value < player2Card.value) {
        player2.score++
        console.log(`${player2} won!`)
        alert(`${player2} won!`)
    } else {
        console.log("It's a draw!")
        alert("It's a draw!")
    }
}

// Next we will build out the logic for scoring:

if(player1.score > player2.score) {
  console.log(`${player1.playerName} Wins! Ending score: ${player1.score} vs ${player2.score}`)
  alert(`${player1.playerName} Wins! Ending score: ${player1.score} vs ${player2.score}`)
} else if (player1.score < player2.score) {
  console.log(`${player2.playerName} Wins! Ending score: ${player2.score} vs ${player1.score}`)
  alert(`${player2.playerName} Wins! Ending score: ${player2.score} vs ${player1.score}`)
} else {
  console.log("It's a tie! 😲")
  alert("It's a tie! 😲")
}

// Game ends:

alert("Game Over!");