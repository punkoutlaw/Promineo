const cardSuits = ["♠", "♣", "♥", "♦"]
const cardValues = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
]

class Deck {
  constructor(cards = freshDeck()) {
    this.cards = cards
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
    for (let i = this.numberOfCards - 1; i > 0; i--) {
      const newIndex = Math.floor(Math.random() * (i + 1))
      const oldValue = this.cards[newIndex]
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

function freshDeck() {
  return cardSuits.flatMap(suit => {
    return cardValues.map(value => {
      return new Card(suit, value)
    })
  })
}

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
  J: 11,
  Q: 12,
  K: 13,
  A: 14
}

let playerDeck
let computerDeck
let inRound
let stop
let player1 = "David"
let player2 = "Computer"

startGame()
function startGame() {
  const deck = new Deck()
  deck.shuffle(player1, player2)

  const deckMidpoint = Math.ceil(deck.numberOfCards / 2)
  playerDeck = new Deck(deck.cards.slice(0, deckMidpoint))
  computerDeck = new Deck(deck.cards.slice(deckMidpoint, deck.numberOfCards))
  inRound = false
  stop = false
} 
console.log(player1 + " is given 26 cards")
// console.log(playerDeck)
console.log(player2 + " is given 26 cards")
// console.log(computerDeck)

  const playerCard = playerDeck.pop()
  const computerCard = computerDeck.pop()

  console.log(player1, playerCard)
  console.log(player2, computerCard)

  updateDeckCount()

  if (isRoundWinner(playerCard, computerCard)) {
    console.log(`${player1} won!`)
    playerDeck.push(playerDeck.pop())
    playerDeck.push(computerDeck.pop())
  } else if (isRoundWinner(computerCard, playerCard)) {
    console.log(`${player2} won!`)
    computerDeck.push(playerDeck.pop())
    computerDeck.push(computerCard)
  } else {
    console.log("It's a draw!")
    playerDeck.push(playerDeck.pop())
    computerDeck.push(computerDeck.pop())
  } 
  
  if (isGameOver(playerDeck)) {
    console.log("You Lose!!")
    stop = true
  } else if (isGameOver(computerDeck)) {
    console.log("You Win!!")
    stop = true
  }

function updateDeckCount() {
  if(playerCard > computerCard === computerDeck.pop() || 
      computerCard > playerCard === playerDeck.pop()) {
      } else { (playerCard == computerCard, playerDeck.pop() && computerDeck.pop())
    }
} 

// console.log(playerDeck, computerDeck)
console.log(player1 + " has " + playerDeck.numberOfCards + " cards")
console.log(player2 + " has " + computerDeck.numberOfCards + " cards")

function isRoundWinner(cardOne, cardTwo) {
  return cardValueSwitch[cardOne.value] > cardValueSwitch[cardTwo.value]
}

function isGameOver(deck) {
  return deck.numberOfCards === 0
}