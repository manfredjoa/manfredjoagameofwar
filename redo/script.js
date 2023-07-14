class Card {
  constructor(suit, rank, score) {
    this.suit = suit
    this.rank = rank
    this.score = score
  }
}


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


class Player {
  constructor(name) {
    this.name = name
    this.cards = []
  }
}


const theDeck = new Deck()
const playerOne = new Player('Player 1')
const playerTwo = new Player('Player 2')

playerOne.cards.push(theDeck.cards.splice(0, 26))
playerTwo.cards.push(theDeck.cards.splice(0, 26))
let playerOneDeck = playerOne.cards[0]
let playerTwoDeck = playerTwo.cards[0]


let gameOfWar = () => {
  let playerOneCard = []
  let playerTwoCard = []
  let pileOne = []
  let pileTwo = []
  let combinedPile = []

  function playerOneWins() {
    console.log(`${playerOne.name} played ${playerOneCard[0].rank} of ${playerOneCard[0].suit} and ${playerTwo.name} played ${playerTwoCard[0].rank} of ${playerTwoCard[0].suit}. ${playerOne.name} wins!`)
    playerOneDeck.push(...playerOneCard); playerOneDeck.push(...playerTwoCard)
    playerOneCard = []; playerTwoCard = []
    console.log(`${playerOne.name}: ${playerOneDeck.length} cards, ${playerTwo.name}: ${playerTwoDeck.length} cards`)
  }

  function playerTwoWins() {
    console.log(`${playerOne.name} played ${playerOneCard[0].rank} of ${playerOneCard[0].suit} and ${playerTwo.name} played ${playerTwoCard[0].rank} of ${playerTwoCard[0].suit}. ${playerTwo.name} wins!`)
    playerTwoDeck.push(...playerOneCard); playerTwoDeck.push(...playerTwoCard)
    playerOneCard = []; playerTwoCard = []
    console.log(`${playerOne.name}: ${playerOneDeck.length} cards, ${playerTwo.name}: ${playerTwoDeck.length} cards`)
  }

  function war() {
    if (playerOneDeck.length < 4) {
      console.log(`${playerOne.name} played ${playerOneCard[0].rank} of ${playerOneCard[0].suit} and ${playerTwo.name} played ${playerTwoCard[0].rank} of ${playerTwoCard[0].suit}. WAR!!!`)
      console.log(`${playerOne.name} does not have enough cards to go to War. ${playerTwo.name} takes ${playerOne.name}'s final ${playerOneDeck.length + 1} cards.`)
      playerTwoDeck.push(...playerOneDeck)
      playerOneDeck = []
      return

    } else if (playerTwoDeck.length < 4) {
      console.log(`${playerOne.name} played ${playerOneCard[0].rank} of ${playerOneCard[0].suit} and ${playerTwo.name} played ${playerTwoCard[0].rank} of ${playerTwoCard[0].suit}. WAR!!!`)
      console.log(`${playerTwo.name} does not have enough cards to go to War. ${playerOne.name} takes ${playerTwo.name}'s final ${playerTwoDeck.length + 1} cards.`)
      playerOneDeck.push(...playerTwoDeck)
      playerTwoDeck = []
      return

    } else {
      console.log(`${playerOne.name} played ${playerOneCard[0].rank} of ${playerOneCard[0].suit} and ${playerTwo.name} played ${playerTwoCard[0].rank} of ${playerTwoCard[0].suit}. WAR!!!`)

      pileOne.push(playerOneDeck.splice(0, 3)); pileTwo.push(playerTwoDeck.splice(0, 3))

      combinedPile.push(...pileOne[0]); combinedPile.push(...pileTwo[0])
      pileOne = []; pileTwo = []

      combinedPile.push(...playerOneCard); combinedPile.push(...playerTwoCard)
      playerOneCard = []; playerTwoCard = []

      playerOneCard = playerOneDeck.splice(0, 1); playerTwoCard = playerTwoDeck.splice(0, 1)

      if (playerOneCard[0].score > playerTwoCard[0].score) {
        playerOneDeck.push(...combinedPile)
        combinedPile = []
        playerOneWins()

      } else if (playerTwoCard[0].score > playerOneCard[0].score) {
        playerTwoDeck.push(...combinedPile)
        combinedPile = []
        playerTwoWins()

      } else while (playerOneCard.length !== 0 && playerOneCard[0].score === playerTwoCard[0].score) {
        war()
      }
    }
  }
  while (playerOneDeck.length > 0 && playerTwoDeck.length > 0) {
    playerOneCard = playerOneDeck.splice(0, 1); playerTwoCard = playerTwoDeck.splice(0, 1)

    if (playerOneCard[0].score > playerTwoCard[0].score) {
      playerOneWins()

    } else if (playerTwoCard[0].score > playerOneCard[0].score) {
      playerTwoWins()

    } else if (playerOneCard[0].score !== undefined && playerOneCard[0].score === playerTwoCard[0].score) {
      war()
    }
  } if (playerOneDeck.length === 0) {
    console.log(`${playerOne.name} has ${playerOneDeck.length} cards left. ${playerTwo.name} wins the game!`)

  } else if (playerTwoDeck.length === 0) {
    console.log(`${playerTwo.name} has ${playerTwoDeck.length} cards left. ${playerOne.name} wins the game!`)
  }
}
// gameOfWar()