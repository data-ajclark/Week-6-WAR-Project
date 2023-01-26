alert ("This is WAR! The game has 26 rounds and high card for each round gets a point, ties get nothing. May the best player win!")

//Making a deck of cards.

class Deck {
  suits = ['H', 'C', 'S', 'D'];
  ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  deck = initializeDeck(this.suits, this.ranks);
  show() {
    console.log(this.deck);
  }
}

function initializeDeck(suits, ranks) {
  let deck = []
  suits.forEach(suit => {
    ranks.forEach(rank => {
      deck.push(`${rank}${suit}`)
    });
  });
  console.log("This is the full deck of 52 cards.", deck)
  return deck;
}

//shuffling a deck

function shuffle(deck) {
  let shuffledArray = [];
  let usedIndexes = [];
  let i = 0;
  while(i < deck.deck.length) {
    let randomNumber = Math.floor(Math.random() * deck.deck.length);
    if (!usedIndexes.includes(randomNumber)) {
      shuffledArray.push(deck.deck[randomNumber]);
      usedIndexes.push(randomNumber);
      i++;
    }
    
  }
  console.log("This is the shuffled deck.", shuffledArray);
  return shuffledArray;
}

let deck = new Deck();

mainDeck = shuffle(deck);

const cardValue = {
  J: 11,
  Q: 12,
  K: 13,
  A: 14,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10,
}

//This is the player information and their half of the deck.
 
const player1 = [];
player1.mainDeck = mainDeck.slice(0, 26);

console.log("This is Player 1's half of the deck", player1.mainDeck);

const player2 = [];
player2.mainDeck = mainDeck.slice(26, 52);

console.log("This is Player 2's half of the deck", player2.mainDeck);

//Scoring the cards.

let player1Score = 0;
let player2Score = 0;
let player1Card = 0;
let player2Card = 0;

console.log(`\n ***Let the game begin.***`)

function winner (player1Score, player2Score) {
  if (player1Score > player2Score) {
    alert(`Player 1 is the winner with ${player1Score} points! Better luck next time Player 2.`)
  }
  else if (player2Score > player1Score) {
    alert(`Player 2 is the winner with ${player2Score} points! Better luck next time Player 1.`)
    }
  else{
    alert(`It's a tie!`);
  }
  alert ("Thanks for playing!")
}

for (let i = 0; i < player1.mainDeck.length; i++) {
  
  const player1Card = player1.mainDeck.map(string => string.slice(0, -1));
  const player2Card = player2.mainDeck.map(string => string.slice(0, -1));
 
  if (cardValue[player1Card[i]] > cardValue[player2Card[i]]) {
    player1Score++;
    }
    else if (cardValue[player2Card[i]] > cardValue[player1Card[i]]) {
      player2Score++;
    }
    else{}
 
  console.log(`Round: `, (i +1))
  console.log(`Player 1's card was ${player1.mainDeck[i]} New Score is: `, + player1Score);
  console.log(`Player 2's card was ${player2.mainDeck[i]} New Score is: `, + player2Score, `\n`);
  console.log(`---------------------------------------------------------------------------`);
}
   
winner(player1Score, player2Score);
