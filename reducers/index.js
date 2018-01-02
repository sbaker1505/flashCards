import { GET_DECKS, ADD_DECK, ADD_CARD } from '../actions'

function decks (state = {}, action) {
   const { decks, deck, card } = action
  switch(action.type) {
    case GET_DECKS :
      return {
        ...state,
        ...decks
      }
    case ADD_DECK :
      return {
        ...state,
        [deck]: {
          title: deck,
          questions: []
        }
      }
    case ADD_CARD :
      return {
        ...state,
        [deck]: {
          ...state[deck],
          ...card
        }
      }
    default :
      return state
  }
}

export default decks
