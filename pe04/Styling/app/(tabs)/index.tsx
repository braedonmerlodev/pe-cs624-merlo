import { StyleSheet, View } from 'react-native';
import React from 'react';

// Import your App component
import App from '../../App'; // Adjust this path to where your App.js is located

export default function HomeScreen() {
  // Simply return your App component
  return (
    <View style={styles.container}>
      <App />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Take up the entire screen
  },
});