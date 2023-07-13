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

playerOne.cards.push(theDeck.cards.splice(0, 26))
playerTwo.cards.push(theDeck.cards.splice(0, 26))
let playerOneDeck = playerOne.cards[0]
let playerTwoDeck = playerTwo.cards[0]


//

//
let gameOfWar = () => {
  let playerOneCard = []
  let playerTwoCard = []
  let pile = []

  function playerOneWins() {
    if (pile = []) {
      console.log(`${playerOne.name} played ${playerOneCard[0].rank} of ${playerOneCard[0].suit} and ${playerTwo.name} played ${playerTwoCard[0].rank} of ${playerTwoCard[0].suit}. ${playerOne.name} wins!`)

    } else {
      console.log(`${playerOne.name} played ${playerOneCard[0].rank} of ${playerOneCard[0].suit} and ${playerTwo.name} played ${playerTwoCard[0].rank} of ${playerTwoCard[0].suit}. ${playerOne.name} wins the war!`)
    }
    playerOneDeck.push(...playerOneCard); playerOneDeck.push(...playerTwoCard)
    console.log(playerOneDeck.length, playerTwoDeck.length)
  }
  function playerTwoWins() {
    if (pile = []) {
      console.log(`${playerOne.name} played ${playerOneCard[0].rank} of ${playerOneCard[0].suit} and ${playerTwo.name} played ${playerTwoCard[0].rank} of ${playerTwoCard[0].suit}. ${playerTwo.name} wins!`)

    } else {
      console.log(`${playerOne.name} played ${playerOneCard[0].rank} of ${playerOneCard[0].suit} and ${playerTwo.name} played ${playerTwoCard[0].rank} of ${playerTwoCard[0].suit}. ${playerTwo.name} wins the war!`)
    }
    playerTwoDeck.push(...playerOneCard); playerTwoDeck.push(...playerTwoCard)
    console.log(playerOneDeck.length, playerTwoDeck.length)
  }
  function war() {
    if (playerOneDeck.length < 4) {
      console.log(`${playerOne.name} does not have enough cards to go to War. ${playerTwo.name} wins the game!`)

    } else if (playerTwoDeck.length < 4) {
      console.log(`${playerTwo.name} does not have enough cards to go to War. ${playerOne.name} wins the game!`)

    } else {
      console.log(`${playerOne.name} played ${playerOneCard[0].rank} of ${playerOneCard[0].suit} and ${playerTwo.name} played ${playerTwoCard[0].rank} of ${playerTwoCard[0].suit}. WAR!!!`)
      pile.push(playerOneDeck.splice(0, 3)); pile.push(playerTwoDeck.splice(0, 3))
      pile.push(playerOneCard); pile.push(playerTwoCard)
      playerOneCard = playerOneDeck.splice(0, 1); playerTwoCard = playerTwoDeck.splice(0, 1)
      console.log(pile)
      console.log(playerOneCard, playerTwoCard)

      if (playerOneCard[0].score > playerTwoCard[0].score) {
        playerOneWins()
        playerOneDeck.push(...pile[0]); playerOneDeck.push(...pile[1]); playerOneDeck.push(...pile[2])
        console.log(playerOneDeck)
        console.log(playerTwoDeck)

      } else if (playerTwoCard[0].score > playerOneCard[0].score) {
        playerTwoWins()
        playerTwoDeck.push(...pile[0]); playerTwoDeck.push(...pile[1]); playerTwoDeck.push(pile[2])
        console.log(playerOneDeck)
        console.log(playerTwoDeck)

      } else while (playerOneCard[0].score !== undefined && playerOneCard[0].score === playerTwoCard[0].score) {
        war()
      }
    }
  }
  // while (playerOneDeck.length > 0 && playerTwoDeck.length > 0) {
  playerOneCard = playerOneDeck.splice(0, 1); playerTwoCard = playerTwoDeck.splice(0, 1)

  if (playerOneCard[0].score > playerTwoCard[0].score) {
    playerOneWins()

  } else if (playerTwoCard[0].score > playerOneCard[0].score) {
    playerTwoWins()

  } else if (playerOneCard[0].score !== undefined && playerOneCard[0].score === playerTwoCard[0].score) {
    war()
  }
}
// if (playerOneDeck.length === 0) {
//   console.log(`${playerOne.name} has no more cards. ${playerTwo.name} wins the game!`)

// } else if (playerTwoDeck.length === 0) {
//   console.log(`${playerTwo.name} has no more cards. ${playerOne.name} wins the game!`)
// }
// }
gameOfWar()

