import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation'
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'

import DeckList from './components/DeckList'
import AddCard from './components/AddCard'
import Deck from './components/Deck'
import NewDeck from './components/NewDeck'
import Quiz from './components/DeckList'

import { white, blue } from './utils/colors'


export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{height: 30}}/>
        <Tabs />
      </View>
    );
  }
}

const Tabs = TabNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) =>
        <MaterialCommunityIcons
          name='cards'
          size={30}
          color={tintColor}
        />
    }
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'New Deck',
      tabBarIcon: ({ tintColor }) =>
        <Ionicons
          name='ios-add-circle'
          size={30}
          color={tintColor}
        />
    }
  }
},{
  navigationOptions: {
    header: null
  },
  tabBarOptions: {
    activeTintColor: blue,
    style: {
      height: 56,
      backgroundColor: white,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
