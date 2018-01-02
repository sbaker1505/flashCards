import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, TextInput, KeyboardAvoidingView } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'

import { white, blue, red, gray } from '../utils/colors'
import { addCard } from '../actions'
import { submitNewCard } from '../utils/api'

import TextButton       from './TextButton'


class AddCards extends Component {
  state = {
    question: null,
    answer: null
  }

  submit = () => {
    const { question, answer } = this.state
    const { deck } = this.props.navigation.state.params

    // Add deck to redux
    this.props.dispatch(addCard(deck, {question, answer}))

    // Reset state
    this.setState(() => ({
      question: null,
      answer: null
    }))

    // Re-Route to home page
    this.toHome()

    // Send deck title to AsyncStorage
    submitNewCard(deck, {question, answer})


    // clearLocalNotification()
    //   .then(setLocalNotification)
  }

  toHome = () => {
    this.props.navigation.dispatch(NavigationActions.back())
  }

  render() {
    const { deck } = this.props.navigation.state.params
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.keyboardContainer}>
        <View style={styles.container}>
          <Text style={styles.text}>Add new card to the {deck.title} deck</Text>
          <View style={styles.btnContainer}>
            <TextInput
              placeholder='Question'
              autoFocus={true}
              placeholderTextColor={gray}
              value={this.state.question}
              style={styles.input}
              onChangeText={(text) => this.setState({question: text})}
            />
            <TextInput
              placeholder='Answer'
              multiline={true}
              placeholderTextColor={gray}
              value={this.state.answer}
              style={styles.input}
              onChangeText={(text) => this.setState({answer: text})}
            />
          </View>
          <TextButton
            style={styles.button}
            onPress={this.submit}>
            Submit
          </TextButton>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

export default connect()(AddCards)

const styles = StyleSheet.create({
  keyboardContainer: {
    flex: 1
  },
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
  input: {
    paddingBottom: 10,
    width: '80%',
    borderColor: blue,
    borderBottomWidth: 1,
    fontSize: 18,
    color: red
  },
  button: {
    marginTop: 10,
    backgroundColor: blue
  },
  btnContainer: {
    height: 100,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    marginLeft: 20,
    marginRight: 20,
    fontSize: 30,
    color: blue,
    textAlign: 'center',
  }
})
