import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';
import StartPage from './app/components/startpage/StartPage';

export default class CoinTosser extends Component {
  render() {
    return (
      <View>
        <StartPage />
      </View>
    );
  }
}

AppRegistry.registerComponent('CoinTosser', () => CoinTosser);
