import React, { Component } from 'react';
import {
  AppRegistry, Text, StyleSheet, View, Image, Animated, Alert
} from 'react-native';
import Button from 'react-native-button';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class CoinPage extends Component {
  flip() {
    Alert.alert('Flipped', 'Make the Flip action')
  }
  popupInfo() {
    Alert.alert('Info', 'Information about this app')
  }
  reset() {
    Alert.alert('Reset', 'reset method')
  }
  static navigationOptions = {
    headerLeft: null,
    header: null,
  };
  render() {
    return (
      <Image source={require('./img/start_black_img.jpg')} style={styles.container}>
          <View style={styles.green}>
            <View style={styles.icon}>
              <Icon name='info' size={30} onPress={() => this.popupInfo()} />
            </View>
            <View style= {{alignItems: 'center'}}>
              <Image source={require('./img/us-quarter-front.jpg')} />
              <Button containerStyle={styles.flipBtn} style={{color:'#000000', margin: 10}} onPress={() => this.flip()}> Flip/Catch </Button>
            </View>
            <View style={styles.rowStyle}>
              <Text style={styles.header}> Head </Text>
              <View style= {{flex:1}} />
              <Text style={styles.header}> Tail </Text>
            </View>
            <View style={styles.rowStyle}>
              <Text style={styles.stat}> 0 </Text>
              <Text style={{textAlign: 'center', flex: 1}}> Count </Text>
              <Text style={styles.stat}> 0 </Text>
            </View>
            <View style={styles.rowStyle}>
            <Text style={styles.stat}> 0 </Text>
            <Text style={{textAlign: 'center', flex: 1}}> Percent </Text>
            <Text style={styles.stat}> 0 </Text>
            </View>
            <View style = {{alignItems:'center', marginBottom: 10}}>
              <Button containerStyle={styles.flipBtn} style={{color:'#000000', margin: 10}} onPress={() => this.reset()}> Reset </Button>
            </View>
          </View>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    width: undefined,
    height: undefined,
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  green: {
    flex: 1,
    marginVertical: 70,
    backgroundColor: '#6edc6c',
    alignSelf: 'stretch',
    height: 75,
  },
  icon: {
    margin: 15,
  },
  flipBtn: {
    margin: 10,
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 5,
    backgroundColor:'#FFFFFF'
  },
  header: {
    fontSize: 20,
    marginHorizontal: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#000000',
    flex: 1,
  },
  stat: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    fontSize: 20,
    marginHorizontal: 20,
    textAlign: 'center',
  },
  rowStyle: {
    marginTop: 15, flexDirection: 'row',
  }
});

AppRegistry.registerComponent('CoinPage', () => CoinPage);
