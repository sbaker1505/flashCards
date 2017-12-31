import { AsyncStorage } from 'react-native'

export const DECK_STORAGE_KEY = 'FlashCards:decks'

export function fetchDecks() {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then(checkInit)
}

function checkInit(results){
  return results === null ? initStartupDecks() : JSON.parse(results)
}

export function initStartupDecks() {
  const decks = {
    React: {
      title: "React",
      questions: [
        {
          question: "What is React?",
          answer: "A library for managing user interfaces"
        },
        {
          question: "Where do you make Ajax requests in React?",
          answer: "The componentDidMount lifecycle event"
        }
      ]
    },
    JavaScript: {
      title: "JavaScript",
      questions: [
        {
          question: "What is a closure?",
          answer: "The combination of a function and the lexical environment within which that function was declared."
        }
      ]
    }
  }

  AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(decks))
  return decks
}
