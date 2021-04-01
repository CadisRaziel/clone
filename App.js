import React, { Component } from 'react'
import { View } from 'react-native'
// import Feed from './src/screens/Feed'
import Navigator from './src/Navigator'

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>

        <Navigator />

      </View>
    )
  }
}