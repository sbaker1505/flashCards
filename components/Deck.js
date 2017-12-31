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

  startQuiz = () => {

  }
  render() {
    const { deck, navigation } = this.props

    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={{fontSize: 24, color: blue}}>{deck.title}</Text>
          <Text style={{fontSize: 18}}>{deck.questions.length} cards</Text>
        </View>
        <View style={styles.btnContainer}>
          <TextButton
            style={[styles.button, {backgroundColor: 'rgba(0, 0, 0, 0.4)'}]}
            onPress={() => navigation.navigate(
              'AddCard',
              {deck: deck.title}
            )}>
            Add Card
          </TextButton>
          <TextButton
            style={[styles.button, {backgroundColor: green}]}
            onPress={() => navigation.navigate(
              'Quiz',
              {title: deck.title}
            )}>
            Start Quiz
          </TextButton>
        </View>
      </View>
    )
  }
}

function mapStateToProps(state, { navigation }) {
  const { deck } = navigation.state.params

  return {
    deck
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
