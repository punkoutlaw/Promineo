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

class Card {
    constructor(spades, diamonds, clubs, hearts) {
        this.spades = spades;
        this.diamonds = diamonds;
        this.clubs = clubs;
        this.hearts = hearts;
    }
}

class Deck {
    constructor()
}

class Player {
    constructor()
}

Card.prototype = {
    get number() {
      switch(this.value) {
        case 11:
          return 'J';
        case 12:
          return 'Q';
        case 13:
          return 'K';
        case 1:
          return 'A';
        default:
          return this.value;
        }
    }
}