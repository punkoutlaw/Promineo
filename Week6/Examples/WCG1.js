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

class Player {
    constructor(player) {
      this.player = player
      this.score = 0
    }
    toString() {
      return this.player
    }
  }
  
  // The following code will set a constant value for each of the created arrays:
  
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
    J: 11,
    Q: 12,
    K: 13,
    A: 14
  }
  
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
  
  // The folling code block will create a new deck with all 52 cards:
  
  function freshDeck() {
    return cardSuits.flatMap(suit => {
      return cardValues.map(value => {
        return new Card(suit, value)
      })
    })
  }
  let playerDeck
  let computerDeck
  let inRound
  let stop
  let player1 = new Player("David")
  let player2 = new Player("Computer")
  
  startGame()
  function startGame() {
    const deck = new Deck()
    deck.shuffle(player1, player2)
  
// This block of code will split the card into 2 piles

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
  
  function updateDeckCount() {
    if(playerCard > computerCard, computerDeck.pop() ||
        computerCard > playerCard, playerDeck.pop()) { 
        } else { (playerCard == computerCard, playerDeck.pop() && computerDeck.pop())
      }
    } 
  
    updateDeckCount()
    
    if (isRoundWinner(playerCard, computerCard)) {
      console.log(`${player1} won!`)
      playerDeck.push(playerCard)
      playerDeck.push(computerCard)
    } else if (isRoundWinner(computerCard, playerCard)) {
      console.log(`${player2} won!`)
      computerDeck.push(playerCard)
      computerDeck.push(computerCard)
    } else {
      console.log("It's a draw!")
      playerDeck.push(playerCard)
      computerDeck.push(computerCard)
    } 
    
    if (isGameOver(playerDeck)) {
      console.log("You Lose!!")
      stop = true
    } else if (isGameOver(computerDeck)) {
      console.log("You Win!!")
      stop = true
    }
  
  // console.log(playerDeck, computerDeck)
  console.log(player1 + " now has " + playerDeck.numberOfCards + " cards")
  console.log(player2 + " now has " + computerDeck.numberOfCards + " cards")
  
  function isRoundWinner(cardOne, cardTwo) {
    return cardValueSwitch[cardOne.value] > cardValueSwitch[cardTwo.value]
  }
  
  function isGameOver(deck) {
    return deck.numberOfCards === 0
  }