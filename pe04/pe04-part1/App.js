import React, { Component } from 'react';
import { Image, View, Text } from 'react-native'; // Added Text import
import styles from './styles'; 

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          <View style={styles.cardImageContainer}>
            <Image style={styles.cardImage} source={require('./assets/images/user.png')} />
          </View>
          
          {/* Added text content with appropriate styling */}
          <View style={styles.textContainer}>
            <Text style={styles.nameText}>Braedon Merlo</Text>
            <Text style={styles.titleText}>React Native Developer</Text>
            <Text style={styles.bodyText}>
              Braedon has over six years of experience coding in JavaScript. He taught himself HTML, CSS, and JavaScript before attending a coding bootcamp. 
              Here's a funny story: I used to not realize you could create style classes, 
              so I would individually style prebuilt tags like h1, h2, h3, and p. 
              If you're familiar with styling, you can imagine the conflicts this caused!
            </Text>
          </View>
        </View>
      </View>
    );
  }
}