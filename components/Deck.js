import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { white, blue } from '../utils/colors'

class Deck extends Component {
  static navigationOptions = ({ navigation }) => {
    const { deck } = navigation.state.params

    return {
      title: deck.title
    }
  }
  render() {
    return (
      <View>
        <Text>Deck</Text>
      </View>
    )
  }
}

export default Deck
