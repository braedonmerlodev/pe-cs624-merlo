import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';

const Input = ({inputValue, inputChange, submitTodo}) => (
  <View style={styles.inputContainer}>
    <TextInput
      value={inputValue}
      style={styles.input}
      placeholder="What needs to be done?"
      placeholderTextColor="#CACACA"
      selectionColor="#666666"
      onChangeText={inputChange}
    />
    <TouchableOpacity style={styles.button} onPress={submitTodo}>
      <Text style={styles.buttonText}>Add</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  inputContainer: {
    marginLeft: 20,
    marginRight: 20,
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowColor: '#000000',
    shadowOffset: { width: 2, height: 2 },
  },
  input: {
    height: 60,
    backgroundColor: '#ffffff',
    paddingLeft: 10,
    paddingRight: 10,
  },
  button: {
    width: 80,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Input;
