import React, { Component } from 'react';
import { Image, View } from 'react-native';
import styles from './styles'; 

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          <View style={styles.cardImageContainer}>
            <Image style={styles.cardImage} source={require('../../assets/images/user.png')} />
          </View>
        </View>
      </View>
    );
  }
}