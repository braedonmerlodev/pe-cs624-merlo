import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const Input = ({inputValue, inputChange, submitToDo}) => (
  <View style={styles.inputContainer}>
    <TextInput
      value={inputValue}
      style={styles.input}
      placeholder="What needs to be done?"
      placeholderTextColor="#CACACA"
      selectionColor="#666666"
      onChangeText={inputChange}
    />
    <TouchableOpacity
      style={styles.addButton}
      onPress={submitToDo}
    >
      <Text style={styles.addButtonText}>Add</Text>
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
  addButton: {
    width: 80,
    backgroundColor: '#4CAF50',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  }
});

export default Input;
