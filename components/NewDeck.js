import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet, TextInput } from 'react-native'

import { white, blue, gray } from '../utils/colors'

import TextButton       from './TextButton'

class NewDeck extends Component {
  state = {
    title: null
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>What is the title of your new deck?</Text>
        <TextInput
          placeholder='Deck Title'
          autoFocus={true}
          maxLength={30}
          placeholderTextColor={gray}
          value={this.state.title}
          style={styles.input}
          onChangeText={(text) => this.setState({title: text})}
        />
        <TextButton
          style={styles.button}
          onPress={() => console.log('Pressed')}>
          Submit
        </TextButton>
      </View>
    )
  }
}

export default NewDeck

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
  input: {
    paddingBottom: 10,
    width: '80%',
    borderColor: blue,
    borderBottomWidth: 1,
    fontSize: 16
  },
  button: {
    marginTop: 10,
    backgroundColor: blue
  },
  text: {
    fontSize: 30,
    color: blue,
    textAlign: 'center'
  }
})
