// To do
// Create function that plays the game
// Create a pile array within this function from which cards played will be pushed into.

//
class Card {
  constructor(suit, rank, score) {
    this.suit = suit
    this.rank = rank
    this.score = score
  }
}
//

//
class Deck {
  constructor() {
    this.cards = []
    this.fillDeck()
    this.shuffleDeck()
  }

  fillDeck() {
    const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds']
    const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace']

    for (let i = 0; i < suits.length; i++) {

      for (let j = 0; j < ranks.length; j++) {
        this.cards.push(new Card(suits[i], ranks[j], j + 2))
      }
    }
  }

  shuffleDeck() {
    let j = 0
    for (let i = 0; i < this.cards.length; i++) {
      j = Math.floor(Math.random() * this.cards.length);
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]]
    }
    // console.log(this.cards)
  }
}
//

//
class Player {
  constructor(name) {
    this.name = name
    this.cards = []
  }
}
//

// 
const theDeck = new Deck()
const playerOne = new Player('Player 1')
const playerTwo = new Player('Player 2')

const splitDeck = () => {
  playerOne.cards.push(theDeck.cards.splice(0, 26))
  playerTwo.cards.push(theDeck.cards.splice(0, 26))
}

splitDeck()

console.log(playerOne)
console.log(playerTwo)
//
