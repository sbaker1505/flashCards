export const GET_DECKS = 'GET_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD = 'ADD_CARD'

export const getDecks = (decks) => {
  type: GET_DECKS,
  decks
}

export const addDeck = (deck) => {
  type: ADD_DECK,
  deck
}

export const addCard = (deck, card) => {
  type: ADD_CARD,
  deck,
  card
}
