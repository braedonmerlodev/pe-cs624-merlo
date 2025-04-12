import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export function HelloWorld() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Braedon Merlo</Text>
      <Text style={styles.text}>MSCY</Text>
      <Text style={styles.text}>City University of Seattle</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 16,
    borderRadius: 8,
  },
  text: {
    fontSize: 18,
    marginVertical: 5,
    fontWeight: 'bold',
  },
}); 