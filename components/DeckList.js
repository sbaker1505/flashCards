import React, { Component } from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { AppLoading } from 'expo'

import { white, blue } from '../utils/colors'
import { fetchDecks } from '../utils/api'

import { getDecks } from '../actions'


class DeckList extends Component {
  state = {
     ready: false
   }

   componentDidMount() {
     const { dispatch } = this.props

     fetchDecks()
       .then((decks) => dispatch(getDecks(decks)))
       .then(() => this.setState({ ready: true }))
       .catch((error) => console.warn('Fetching decks error: ' + error))
   }

  render() {
    const { decks, navigation } = this.props

    if (this.state.ready === false) {
      return <AppLoading />
    }

    return (
      <View style={styles.container}>
        {Object.keys(decks).map(key =>
          <TouchableOpacity
            key={key}
            onPress={() => navigation.navigate(
              'Deck',
              {deck: decks[key]}
            )}
            style={styles.card}>
              <Text style={{fontSize: 24, color: blue}}>{decks[key].title}</Text>
              <Text style={{fontSize: 16}}>{decks[key].questions.length} cards</Text>
          </TouchableOpacity>
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
    backgroundColor: white,
    borderRadius: 5,
    margin: 5,
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
