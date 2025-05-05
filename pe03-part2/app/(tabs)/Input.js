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
  buttonContainer: {
    alignItems: 'center',
    marginVertical: 10,
  },
  button: {
   backgroundColor: '#f0f0f0',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#e0e0e0',
    alignItems: 'center',
},
  buttonText: {
    color: '#333',
    fontFamily: 'System',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Input;
