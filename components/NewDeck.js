import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, TextInput, KeyboardAvoidingView } from 'react-native'
import { NavigationActions } from 'react-navigation'
import { connect } from 'react-redux'

import { white, blue, gray, red } from '../utils/colors'
import { addDeck } from '../actions'
import { submitNewDeck } from '../utils/api'

import TextButton       from './TextButton'

class NewDeck extends Component {
  state = {
    title: null
  }

  submit = () => {
    const { title } = this.state

    // Add deck to redux
    this.props.dispatch(addDeck(title))

    // Reset state
    this.setState(() => ({
      title: null
    }))

    // Re-Route to home page
    this.toHome()

    // Send deck title to AsyncStorage
    submitNewDeck(title)


    // clearLocalNotification()
    //   .then(setLocalNotification)
  }

  toHome = () => {
    this.props.navigation.dispatch(NavigationActions.back({
      key: 'NewDeck'
    }))
  }


  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.keyboardContainer}>
        <View style={styles.container}>
          <Text style={styles.text}>What is the title of your new deck?</Text>
          <TextInput
            placeholder='Deck Title'
            autoFocus={true}
            maxLength={20}
            placeholderTextColor={gray}
            value={this.state.title}
            style={styles.input}
            onChangeText={(text) => this.setState({title: text})}
          />
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

export default connect()(NewDeck)

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
  text: {
    fontSize: 30,
    color: blue,
    textAlign: 'center',
  }
})
