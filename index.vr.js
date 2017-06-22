import React, { Component } from 'react'
import { AppRegistry, View } from 'react-vr'
import Seattle from './components/seattle'

export default class treydos extends Component {
  render() {
    return (
      <View>
        <Seattle />
      </View>
    )
  }
}

AppRegistry.registerComponent('treydos', () => treydos)
