import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import { white, blue, red, green } from '../utils/colors'

import TextButton       from './TextButton'

class Deck extends Component {
  static navigationOptions = ({ navigation }) => {
    const { deck } = navigation.state.params

    return {
      title: deck.title
    }
  }

  render() {
    const { deck, navigation } = this.props
    const cards = deck.questions

    return (
      <View style={styles.container}>
        {/* <Text>{JSON.stringify(deck)}</Text> */}
        <View style={styles.textContainer}>
          <Text style={{fontSize: 24, color: blue}}>{deck.title}</Text>
          {cards.length > 0
            ? <Text style={{fontSize: 18}}>{deck.questions.length} cards</Text>
            : <Text style={{fontSize: 18}}>You have no cards in this deck.</Text>}
        </View>
        <View style={styles.btnContainer}>
          <TextButton
            style={cards.length > 0
              ? [styles.button, {backgroundColor: 'rgba(0, 0, 0, 0.4)'}]
              : [styles.button, {backgroundColor: blue, height: 100, justifyContent: 'center'}]}
            onPress={() => navigation.navigate(
              'AddCard',
              {deck}
            )}>
            Add Card
          </TextButton>
          {cards.length > 0
            ? <TextButton
                style={[styles.button, {backgroundColor: green}]}
                onPress={() => navigation.navigate(
                  'Quiz',
                  {questions: deck.questions}
                )}>
                Start Quiz
              </TextButton>
            : null}

        </View>
      </View>
    )
  }
}

function mapStateToProps(decks, { navigation }) {
  const { deck } = navigation.state.params

  return {
    deck: decks[deck.title]
  }
}

export default connect(mapStateToProps)(Deck)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    paddingTop: 50,
    paddingBottom: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: blue,
    borderRadius: 30,
    backgroundColor: white
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnContainer: {
    width: '100%',
    alignItems: 'center'
  },
  button: {
    marginTop: 10
  }
})
