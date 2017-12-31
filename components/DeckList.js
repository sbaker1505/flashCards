import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

import { white, blue } from '../utils/colors'
import { fetchDecks } from '../utils/api'

import { getDecks } from '../actions'


class DeckList extends Component {
  // componentDidMount() {
  //   const { dispatch } =  this.props
  //
  //   fetchDecks()
  //     .then((decks) => dispatch(getDecks(decks)))
  // }

  render() {
    return (
      <View>
        <Text>Deck List</Text>
        <Text>{JSON.stringify(this.props.decks)}</Text>
      </View>
    )
  }
}

function mapStateToProps(decks) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(DeckList)
