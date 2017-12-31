import { AsyncStorage } from 'react-native'
import { DECK_STORAGE_KEY, formatDecks } from './_decks'

export const fetchDecks = () => (
  AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then(formatDecks)
)
