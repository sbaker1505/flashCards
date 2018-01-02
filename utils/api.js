import { AsyncStorage } from 'react-native'
import { UsaStates, Elements } from '../initial_decks/InitDecks'

export const DECK_STORAGE_KEY = 'FlashCards:decks'

export function fetchDecks() {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then(checkInit)
}

export function submitNewDeck (title) {
  return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
    [title]: {
      title,
      questions: []
    }
  }))
}

export function submitNewCard (deck, card) {
  return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
    [deck.title]: {
      ...deck,
      questions: [
        ...deck.questions,
        {...card}
      ]
    }
  }))
}



function checkInit(results){
  return results === null ? initStartupDecks() : JSON.parse(results)
}

export function initStartupDecks() {
  const decks = {
    "USA Capitals": {
      title: "USA Capitals",
      questions: UsaStates()
    },
    "Periodic Elements": {
      title: "Periodic Elements",
      questions: Elements()
    }
  }

  AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(decks))
  return decks
}
