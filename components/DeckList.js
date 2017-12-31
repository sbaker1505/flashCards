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
    const { decks } = this.props

    return (
      <View style={styles.container}>
        {Object.keys(decks).map(key =>
          <View key={key} style={styles.card}>
            <Text style={{fontSize: 24, color: blue}}>{decks[key].title}</Text>
            <Text style={{fontSize: 16}}>{decks[key].questions.length} cards</Text>
          </View>
        )}
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


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  card: {
    height: 100,
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    borderRadius: 5,
    margin: 5,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
