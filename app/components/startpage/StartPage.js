import React, { Component } from 'react';
import {
  AppRegistry, Text, StyleSheet, View, Image, Animated, TouchableHighlight
} from 'react-native';

class DecisionAnimation extends Component {
  state = {
    fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
  }
  componentDidMount() {
    Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 1, duration: 5000,
      }
    ).start();                        // Starts the animation
  }
  render() {
    let { fadeAnim } = this.state;
    return (
      <Animated.View                 // Special animatable View
        style={{
          ...this.props.style,
          opacity: fadeAnim,         // Bind opacity to animated value
        }} >
        {this.props.children}
      </Animated.View>
    );
  }
}

export default class StartPage extends Component {

  static navigationOptions = {
    headerLeft: null,
    header: null,
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <TouchableHighlight onPress = { () => navigate('Main') } >
      <Image source={require('./img/start_black_img.jpg')} style={styles.container}>
          <View>
            <Text style={styles.titleText}> CoinTosser </Text>
            <DecisionAnimation style={{width: 250, height: 50, margin: 20, alignItems:'center', }}>
              <Text style={styles.decision}>Decide Now!</Text>
            </DecisionAnimation>
            <View style={styles.hr}></View>
            <Text style={styles.author}> Created by John Lin </Text>
          </View>
      </Image>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: undefined,
    height: undefined,
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  titleText: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 50,
    color: '#fffa87',
    marginTop: 30,
    transform: [{ rotate: '-25deg' }],
  },
  decision: {
    flex: 1,
    color: '#fffa87',
    fontWeight: 'bold',
    fontSize: 20,
    alignItems: 'center',
  },
  author: {
    flex: 1,
    fontSize: 15,
    color: '#7FEF86',
    alignItems: 'center',
  },
  hr: {
    flex: 1,
    marginBottom: 10,
    borderBottomColor: 'white',
    borderBottomWidth: 1,
  },
});

AppRegistry.registerComponent('StartPage', () => StartPage);
