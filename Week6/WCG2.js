let suits = ["♠", "♣", "♥", "♦"];
let values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]
let ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

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

let deck = new Deck();
deck.createDeck(suits, values);
console.log(deck.shuffle());
console.log(deck.deal());

startGame()
function startGame() {
  const deck = new Deck()
  deck.shuffle()
}

let player1Deck = new Deck();
let player2Deck = player1Deck.splitDeck();
