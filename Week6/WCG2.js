// Make a deck of all cards
// Make 2 players
// Deal 26 cards
// Iterate through the turns (loop)
// Play (deal) cards
// if play1 value > than play2 value = p1.score++ (else if statement)
// if play2 value > than play1 value = p2.score++
// Else = nobody gets points
// print score

let suits = ["♠", "♣", "♥", "♦"];
let values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]
let ranks = {
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

class Player {
    name
    hand = [];
    score = 0
    constructor(name) {
      this.playerName = name
    }
    toString() {
      return this.playerName
    }
  }

class Card {
    constructor(suit, value) {
        this.suit = suit;
        this.value = value;
    }
}

class Deck {
    constructor() {
        this.deck = [];
        this.cards = [];
    }

    createDeck(suits, values) {
        for(let suit of suits) {
            for(let value of values) {
                this.deck.push(new Card(suit, value));
            }
        }
        return this.deck;
    }

    shuffle() {
        let counter = this.deck.length, temp, i;
        while(counter) {
            i = Math.floor(Math.random() * counter--);
            temp = this.deck[counter];
            this.deck[counter] = this.deck[i];
            this.deck[i] = temp;
        }
        return this.deck;
    }

// This will let each player polay their top card    

    deal() {
        let hand = [];
        while(hand.length < 2) {
            hand.push(this.deck.pop());
        }
        return hand;
    }

    splitDeck() {
        for(let i = cards.length() - 1; i >= cards.length() / 2; i--) {
            temp.add(cards.get(i));
            cards.remove(i);
        }
        return new Deck(temp);
    }
}

// for(let i = 0; i < 26; i++) {

// }

let player1Deck
let player2Deck

while(player1Deck.hand.length > 0) {
    let player1Card = player1.hand.shift();
    let player2Card = player2.hand.shift();
    if(player1Card.value > player2Card.value) {
        player1.score++
    } else if (player1Card.value < player2Card.value) {
        player2.score++
    } else {
        console.log("It's a draw!")
    }
}

let deck = new Deck();
deck.createDeck(suits, values);
console.log(deck.shuffle());
console.log(deck.deal());

startGame()
function startGame() {
  const deck = new Deck()
  deck.shuffle()
}

if(player1.score > player2.score) {
    console.log("Player 1 wins!")
} else if (player2.score > player1.score) {
    console.log("Player 2 wins!")
} else {
    console.log("It's a tie!")
}
