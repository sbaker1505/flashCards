import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import { white, blue, green, red, pink, gray } from '../utils/colors'

import TextButton       from './TextButton'


class Quiz extends Component {
  state = {
    cardIndex: 0,
    score: 0,
    showAnswer: false,
    gameOver: false
  }

  static navigationOptions = ({ navigation }) => {
    const { questions } = navigation.state.params

    return {
      title: `Question ${counter} of ${questions.length}`
    }
  }

  cardCounter = () => {
    const { cardIndex } = this.state
    const { questions } = this.props
    if (cardIndex < questions.length - 1){
      this.setState({cardIndex: cardIndex + 1})
    } else {
      this.setState({gameOver: true})
    }
  }

  scoreCounter = () => {
    this.setState({score: this.state.score + 1})
    this.cardCounter()
  }

  render() {
    const { questions, navigation } = this.props
    const { cardIndex, score, gameOver } = this.state

    if (gameOver) {
      return (
        <View style={styles.container}>
          <Text style={{fontSize: 24, color: pink}}>Your score is {this.state.score}</Text>
        </View>
      )
    }

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{questions[cardIndex].question}</Text>
        <Text style={{fontSize: 24, color: pink}}>Index: {cardIndex}</Text>
        <Text style={{fontSize: 24, color: pink}}>Score: {score}</Text>
        {this.state.showAnswer
        ? <View style={styles.center}>
            <TouchableOpacity onPress={() => this.setState({showAnswer: !this.state.showAnswer})}>
              <Text style={{fontSize: 16, color: red}}>Hide Answer</Text>
            </TouchableOpacity>
            <View style={styles.answer}>
              <Text style={{fontSize: 16}}>{questions[0].answer}</Text>
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
    borderColor: pink,
    borderRadius: 30,
    backgroundColor: white
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    color: pink,
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
