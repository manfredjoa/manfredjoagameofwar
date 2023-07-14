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

const splitDeck = () => {
  playerOne.cards.push(theDeck.cards.splice(0, 26))
  playerTwo.cards.push(theDeck.cards.splice(0, 26))
}

splitDeck()
//

//
let gameOfWar = () => {
  let playerOneCard = []
  let playerTwoCard = []
  let tiedPile = []

  while (playerOne.cards[0].length > 0 && playerTwo.cards[0].length > 0) {

    playerOneCard.push(playerOne.cards[0].shift())
    playerTwoCard.push(playerTwo.cards[0].shift())

    if (playerOneCard[0].score > playerTwoCard[0].score) {
      console.log(`${playerOne.name} played a ${playerOneCard[0].rank} and ${playerTwo.name} played a ${playerTwoCard[0].rank}. ${playerOne.name} wins!`)

      playerOne.cards[0].push(playerOneCard[0])
      playerOne.cards[0].push(playerTwoCard[0])
      playerOneCard = []
      playerTwoCard = []

      console.log(`${playerOne.name}: ${playerOne.cards[0].length} cards`)
      console.log(`${playerTwo.name}: ${playerTwo.cards[0].length} cards`)

    } else if (playerTwoCard[0].score > playerOneCard[0].score) {
      console.log(`${playerOne.name} played a ${playerOneCard[0].rank} and ${playerTwo.name} played a ${playerTwoCard[0].rank}. ${playerTwo.name} wins!`)

      playerTwo.cards[0].push(playerOneCard[0])
      playerTwo.cards[0].push(playerTwoCard[0])
      playerOneCard = []
      playerTwoCard = []

      console.log(`${playerOne.name}: ${playerOne.cards[0].length} cards`)
      console.log(`${playerTwo.name}: ${playerTwo.cards[0].length} cards`)

    } else while (playerOneCard !== [] && playerOneCard[0].score === playerTwoCard[0].score) {
      if (playerOne.cards[0].length < 4) {
        console.log(`${playerOne.name} does not have enough cards to go to War. ${playerTwo.name} wins the game!`)

      } else if (playerTwo.cards[0].length < 4) {
        console.log(`${playerTwo.name} does not have enough cards to go to War. ${playerOne.name} wins the game!`)
      }

      console.log(`${playerOne.name} played a ${playerOneCard[0].rank} and ${playerTwo.name} played a ${playerTwoCard[0].rank}. War!`)

      tiedPile.push(playerOneCard.shift())
      tiedPile.push(playerTwoCard.shift())

      tiedPile.push(playerOne.cards[0].shift())
      tiedPile.push(playerOne.cards[0].shift())
      tiedPile.push(playerOne.cards[0].shift())

      tiedPile.push(playerTwo.cards[0].shift())
      tiedPile.push(playerTwo.cards[0].shift())
      tiedPile.push(playerTwo.cards[0].shift())

      playerOneCard.push(playerOne.cards[0].shift())
      playerTwoCard.push(playerTwo.cards[0].shift())

      if (playerOneCard[0].score > playerTwoCard[0].score) {
        console.log(`${playerOne.name} played a ${playerOneCard[0].rank} and ${playerTwo.name} played a ${playerTwoCard[0].rank}. ${playerOne.name} wins the war!`)

        playerOne.cards[0].push(playerOneCard[0])
        playerOne.cards[0].push(playerTwoCard[0])
        playerOne.cards[0].push(...tiedPile)

        playerOneCard = []
        playerTwoCard = []
        tiedPile = []

        console.log(`${playerOne.name}: ${playerOne.cards[0].length} cards`)
        console.log(`${playerTwo.name}: ${playerTwo.cards[0].length} cards`)

      } else if (playerTwoCard[0].score > playerOneCard[0].score) {
        console.log(`${playerOne.name} played a ${playerOneCard[0].rank} and ${playerTwo.name} played a ${playerTwoCard[0].rank}. ${playerTwo.name} wins the war!`)

        playerTwo.cards[0].push(playerOneCard[0])
        playerTwo.cards[0].push(playerTwoCard[0])
        playerTwo.cards[0].push(...tiedPile)

        playerOneCard = []
        playerTwoCard = []
        tiedPile = []

        console.log(`${playerOne.name}: ${playerOne.cards[0].length} cards`)
        console.log(`${playerTwo.name}: ${playerTwo.cards[0].length} cards`)
      }
    }
  } if (playerOne.cards[0].length === 0) {
    console.log(`${playerOne.name} has no more cards. ${playerTwo.name} wins the game!`)

  } else if (playerTwo.cards[0].length === 0) {
    console.log(`${playerTwo.name} has no more cards. ${playerOne.name} wins the game!`)
  }
}

console.log(gameOfWar())

// Commented out playerOneCard = [] & playerTwoCard = [] to fix error with looping within the inner loop, but now those arrays are not being emptied and those same cards that were played for the war are being played again immediately after.

// Code runs again after a player does not have enough cards to go to war and a winner is determined. 

// Issue is probably the else while loop conditional! The reason the outer loop is working without issues regarding the playerOneCard & playerTwoCard being empty arrays is because the conditional only refers to the number of cards the players have and nothing to do with the score. How do I change the conditional in a way where having empty arrays won't loop within itself again? Add a condition where it won't run if the array is empty?