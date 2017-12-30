import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import DeckList from './components/DeckList'
import AddCard from './components/AddCard'
import Deck from './components/Deck'
import NewDeck from './components/NewDeck'
import Quiz from './components/DeckList'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <DeckList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
