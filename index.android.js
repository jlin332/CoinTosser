import React, { Component } from 'react';
import {
  AppRegistry, Text, View,
} from 'react-native';
import StartPage from './app/components/startpage/StartPage';
import CoinPage from './app/components/coinpage/CoinPage';
import { StackNavigator } from 'react-navigation';

const CoinTosser = StackNavigator({
  Home: { screen: StartPage },
  Main: { screen: CoinPage },
});

AppRegistry.registerComponent('CoinTosser', () => CoinTosser);
