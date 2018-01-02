import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation'
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Constants } from 'expo'

import reducer    from './reducers'

import DeckList   from './components/DeckList'
import AddCard    from './components/AddCard'
import Deck       from './components/Deck'
import NewDeck    from './components/NewDeck'
import Quiz       from './components/Quiz'

import { white, blue, pink, orange } from './utils/colors'


// Clears data if fatal error
import { AsyncStorage } from 'react-native'
AsyncStorage.clear()

function AppStatusBar ({ backgroundColor, ...props }) {
  return (
    <View style={{backgroundColor, height: Constants.statusBarHeight}}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex: 1}}>
          <AppStatusBar
            backgroundColor={blue}
            barStyle='light-content'
          />
          <DeckNav />
        </View>
      </Provider>
    )
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
      height: 60,
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


const DeckNav = StackNavigator({
  Home: {
    screen: Tabs,
  },
  Deck: {
    screen: Deck,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: blue
      }
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: pink
      }
    }
  },
  AddCard: {
    screen: AddCard,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: orange
      }
    }
  }
},{
  headerMode: 'float',
  mode: 'modal'
})
