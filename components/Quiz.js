import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, Animated } from 'react-native'
import { connect } from 'react-redux'

import { clearLocalNotification, setLocalNotification } from '../utils/helpers'

import { white, blue, green, red, pink, gray } from '../utils/colors'

import TextButton       from './TextButton'


class Quiz extends Component {
  state = {
    cardIndex: 0,
    score: 0,
    showAnswer: false,
    gameOver: false,
    bounceValue: new Animated.Value(0)
  }

  static navigationOptions = ({ navigation }) => {
    const { questions } = navigation.state.params

    return {
      title: typeof (navigation.state.params) === 'undefined'
      || typeof (navigation.state.params.title) === 'undefined'
        ? `Question 1 of ${questions.length}`
        : navigation.state.params.title,
    }
  }

  cardCounter = () => {
    const { cardIndex } = this.state
    const { questions } = this.props
    if (cardIndex < questions.length - 1){
      this.props.navigation.setParams({ title: `Question ${cardIndex + 2} of ${questions.length}` })
      this.setState({
        cardIndex: cardIndex + 1,
        showAnswer: false
      })
    } else {
      this.setState({gameOver: true})
      this.props.navigation.setParams({ title: 'Quiz Complete' })
      clearLocalNotification().then(setLocalNotification)
    }
  }

  scoreCounter = () => {
    this.setState({score: this.state.score + 1})
    this.cardCounter()
  }

  reset = () => {
    this.setState({
      cardIndex: 0,
      score: 0,
      showAnswer: false,
      gameOver: false
    })
    this.props.navigation.setParams({ title: `Question 1 of ${this.props.questions.length}` })
  }

  render() {
    const { questions, navigation } = this.props
    const { cardIndex, score, gameOver, bounceValue } = this.state

    if (gameOver) {
      Animated.sequence([
        Animated.timing(bounceValue, { duration: 300, toValue: 1.5}),
        Animated.spring(bounceValue, {toValue: 1, friction: 5})
      ]).start()

      return (
        <View style={styles.container}>
          <Animated.Text style={{fontSize: 24, color: pink, transform: [{scale: bounceValue}]}}>Correct: {this.state.score}/{questions.length}</Animated.Text>
          <View style={styles.btnContainer}>
            <TextButton
              style={[styles.button, {backgroundColor: blue}]}
              onPress={() => this.reset()}>
              Retake Quiz
            </TextButton>
            <TextButton
              style={[styles.button, {backgroundColor: gray}]}
              onPress={() => navigation.goBack()}>
              Back to Deck
            </TextButton>
          </View>
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{questions[cardIndex].question}</Text>
        {this.state.showAnswer
        ? <View style={styles.center}>
            <TouchableOpacity onPress={() => this.setState({showAnswer: !this.state.showAnswer})}>
              <Text style={{fontSize: 16, color: red}}>Hide Answer</Text>
            </TouchableOpacity>
            <View style={styles.answer}>
              <Text style={{fontSize: 16}}>{questions[cardIndex].answer}</Text>
            </View>
          </View>
        : <TouchableOpacity onPress={() => this.setState({showAnswer: !this.state.showAnswer})}>
            <Text style={{fontSize: 16, color: gray}}>Show Answer</Text>
          </TouchableOpacity>}
        <View style={styles.btnContainer}>
          <TextButton
            style={[styles.button, {backgroundColor: green}]}
            onPress={() => this.scoreCounter()}>
            Correct
          </TextButton>
          <TextButton
            style={[styles.button, {backgroundColor: red}]}
            onPress={() => this.cardCounter()}>
            Wrong
          </TextButton>
        </View>
      </View>
    )
  }
}

function mapStateToProps(state, { navigation }) {
  const { questions } = navigation.state.params

  return {
    questions
  }
}

export default connect(mapStateToProps)(Quiz)

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
  title: {
    fontSize: 24,
    color: blue,
    marginLeft: 20,
    marginRight: 20
  },
  btnContainer: {
    width: '100%',
    alignItems: 'center'
  },
  button: {
    marginTop: 10
  },
  center: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  answer: {
    width: '80%',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    padding: 10,
    margin: 5,
    borderRadius: 5
  }
})
