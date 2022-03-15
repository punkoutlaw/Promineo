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

////////////////////////////////////////////////////////

// // let deck = ['1spades', '2spades']
// // class Card {
// //   value;
// //   suit;
// //   name;
// // }
// // create 2 players (Player)
//   // name
//   // score
//   // player deck
// // make a deck of 52 cards
//   // Card class (make 52 cards)
// // deal 26 to each player
//   // loop through list of 52 cards, alternate pushing card into players arrays (deck)
// // loop for 26 turns
//   // while(player1.deck.length > 0){
//   //   let player1Card = player1.deck.shift()
//   //   let player2Card = player2.deck[0]
//   //   if(player1Card.value > player2Card.value){
//   //     player1.score++
//   //   }
//     // compare the two cards
//     // assign points (player1.score++)
//      // give a point to the winner of each turn
//   // if tie, no points
//   // throw away flipped over card
//   // }
 
// // end the game when no cards are left in player 1 and player 2's decks
// // print the socre (or something)

class Player {
  constructor(name) {
    this.playerName = name
    this.playerCards = [];
    this.score = 0
  }
  toString() {
    return this.playerName
  }
}

class Card {
  constructor(suit, rank, value) {
    this.suit = suit;
    this.rank = rank;
    this.value = value;
  }
}

// let awesomeCard = new Card("an awesome Suit", "Joker", 100);
// console.log(awesomeCard);

class Deck {
  constructor() {
    this.cards = [];
  }
  createDeck() {
    let suits = ["♠", "♣", "♥", "♦"];
    let ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]
    let values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

    for(let i = 0; i < suits.length; i++) {
      for (let j = 0; j < ranks.length; j++) {
        this.cards.push(new Card(suits[i], ranks[j], values[j]));
      }
    }
  }
    shuffleDeck() {
      let location1, location2, tmp;
      for (let i = 0; i < 52; i++) {
          location1 = Math.floor((Math.random() * this.cards.length));
          location2 = Math.floor((Math.random() * this.cards.length));
          tmp = this.cards[location1];
          this.cards[location1] = this.cards[location2];
          this.cards[location2] = tmp;
      }
  }
}

const deck = new Deck(); // Here we are creating a new deck instance. No arguements need to be passed in since there is nothing in the createDeck class!
deck.createDeck();  // calling our function to fill our array
console.log(deck.cards); // logging our cards array [this.cards]

class Board {
  constructor() {
    this.cardsInMiddle = [];
    this.players = [];
  }
  start(player1Name, player2Name) {
    this.players.push(new Player(player1Name));
    this.players.push(new Player(player2Name));
    let deck = new Deck();
    deck.createDeck();
    deck.shuffleDeck();
    this.players[0].playerCards = deck.cards.slice(0, 26);
    this.players[1].playerCards = deck.cards.slice(26, 52);
  }
}

function flipCards() {
  if(!gameover) {
    var card1 = playerCards[0].shift();
    var card2 = playerCards[1].shift();
    checkWinner(card1,card2);
  }
}

function checkWinner(card1, card2) {
  console.log(card1, card2);
  if(card1.value > card2.value) {
    console.log(`${player1} + wins!`)
  }
  else if (card1.value < card2.value) {
    console.log(`${player2} wins!`)
  } else {
    console.log(`It's a draw!`)
  }
}

let gameBoard = new Board();
gameBoard.start("David", "Computer");

console.log(gameBoard.players);



// // loop for 26 turns
//   // while(player1.deck.length > 0){
//   //   let player1Card = player1.deck.shift()
//   //   let player2Card = player2.deck[0]
//   //   if(player1Card.value > player2Card.value){
//   //     player1.score++
//   //   }
//     // compare the two cards
//     // assign points (player1.score++)

