import React, { Component } from 'react';
import {
  AppRegistry, Text, StyleSheet, View, Image, Animated, Alert
} from 'react-native';
import Button from 'react-native-button';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class CoinPage extends Component {
  constructor(props) {
    super(props);
    this.state = {flipping : false, picStatus: true, percentH: 0, percentT: 0, countH: 0, countT: 0, interval:0}
  }

  flip() {
    this.setState({flipping: !this.state.flipping}, function() {
      if(this.state.flipping) {
        this.state.interval = setInterval(() => {
          this.setState(prevState => {return {picStatus: !prevState.picStatus};});
        }, 50 + Math.random() * 100);
      } else {
        clearInterval(this.state.interval);
        if(this.state.picStatus == true) {
          this.updateHead();
        } else {
          this.updateTail();
        }
      }
    })
  }
  updateHead() {
    this.setState({ countH: this.state.countH + 1}, function() {
      this.setState({
        percentH: (100 * this.state.countH/(this.state.countH + this.state.countT)).toFixed(2),
        percentT: (100 * this.state.countT/(this.state.countH + this.state.countT)).toFixed(2)
      })
    })
  }
  updateTail() {
    this.setState({ countT: this.state.countT + 1}, function() {
      this.setState({
        percentH: (100 * this.state.countH/(this.state.countH + this.state.countT)).toFixed(2),
        percentT: (100 * this.state.countT/(this.state.countH + this.state.countT)).toFixed(2)
      })
    })
  }
  popupInfo() {
    Alert.alert('Info', 'Coin Tossing App\n Created in React-Native\n By John Lin Summer 2017')
  }

  reset() {
    this.setState({percentH: 0, percentT: 0, countH: 0, countT: 0})
  }

  static navigationOptions = {
    headerLeft: null,
    header: null,
  };

  render() {
    var img = this.state.picStatus ? require('./img/us-quarter-front.jpg') : require('./img/us-quarter-back.jpg');
    console.log(this.state.flipping);
    return (
      <Image source={require('./img/start_black_img.jpg')} style={styles.container}>
          <View style={styles.green}>
            <View style={styles.icon}>
              <Icon name='info' size={30} onPress={() => this.popupInfo()} />
            </View>
            <View style= {{alignItems: 'center'}}>
              <Image source={img} />
              <Button containerStyle={styles.flipBtn} style={{color:'#000000', margin: 10}} onPress={() => this.flip()}> Flip/Catch </Button>
            </View>
            <View style={styles.rowStyle}>
              <Text style={styles.header}> Head </Text>
              <View style= {{flex:1}} />
              <Text style={styles.header}> Tail </Text>
            </View>
            <View style={styles.rowStyle}>
              <Text style={styles.stat}>{this.state.countH}</Text>
              <Text style={{textAlign: 'center', flex: 1}}> Count </Text>
              <Text style={styles.stat}> {this.state.countT} </Text>
            </View>
            <View style={styles.rowStyle}>
            <Text style={styles.stat}> {this.state.percentH} </Text>
            <Text style={{textAlign: 'center', flex: 1}}> Percent </Text>
            <Text style={styles.stat}> {this.state.percentT} </Text>
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
